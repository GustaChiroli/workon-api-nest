import { Injectable } from "@nestjs/common";
import { FitnessGoal } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateWorkoutGroupDto } from "../dto/create.workout.user.dto";

@Injectable()
export class WorkoutsService {

    constructor(private prisma: PrismaService) { }

    async getFreeWorkouts(user: { id: string }) {
        const userGoal = await this.prisma.user.findUnique({ where: { id: user.id, }, select: { fitnessGoal: true } })
        return this.prisma.workoutGroup.findMany({
            where: {
                goal: userGoal?.fitnessGoal ?? FitnessGoal.LOSE_WEIGHT,
                createdById: null,
                isPublic: true,
            },
            include: {
                workouts: {
                    orderBy: { order: "asc" },
                    include: {
                        exercises: {
                            orderBy: { order: "asc" },
                            include: { exercise: true }
                        }
                    }
                }
            }

        });

    }

    async getCreatedByUserWorkouts(user: { id: string }) {
        const userGoal = await this.prisma.user.findUnique({ where: { id: user.id, }, select: { fitnessGoal: true } })
        return this.prisma.workoutGroup.findMany({
            where: {
                goal: userGoal?.fitnessGoal ?? FitnessGoal.LOSE_WEIGHT,
                createdById: user.id,
                isPublic: false,
            },
            include: {
                workouts: {
                    orderBy: { order: "asc" },
                    include: {
                        exercises: {
                            orderBy: { order: "asc" },
                            include: { exercise: true }
                        }
                    }
                }
            }

        });

    }

    async createCustomWorkout(userId: string, dto: CreateWorkoutGroupDto) {
        const exerciseCount = dto.workouts.reduce(
            (acc, w) => acc + w.exercises.length,
            0
        );

        const estimatedDurationMinutes = dto.workouts.length * 30;
        return this.prisma.workoutGroup.create({
            data: {
                name: dto.name,
                goal: dto.goal,
                difficulty: dto.difficulty,
                createdById: userId,
                isPublic: false,
                estimatedDurationMinutes: estimatedDurationMinutes,
                exerciseCount: exerciseCount,
                workouts: {
                    create: dto.workouts.map((workout, wIndex) => ({
                        name: workout.name,
                        order: wIndex,
                        exercises: {
                            create: workout.exercises.map((ex, eIndex) => ({
                                exerciseId: ex.exerciseId,
                                order: eIndex,
                                sets: ex.sets,
                                reps: ex.reps,
                                durationSeconds: ex.durationSeconds,
                                restSeconds: ex.restSeconds,
                            })),
                        },
                    })),
                },
            },
            include: {
                workouts: {
                    include: {
                        exercises: true,
                    },
                },
            },
        });
    }

}
