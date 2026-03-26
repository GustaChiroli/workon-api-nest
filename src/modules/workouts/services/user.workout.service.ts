import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserWorkoutDto } from "../dto/create.user.workout.dto";

@Injectable()
export class UserWorkoutService {
    constructor(private prisma: PrismaService) { }

    async startWorkout(userId: string, workoutId: string) {
        // 1. fecha treino aberto
        const openWorkout = await this.prisma.userWorkout.findFirst({
            where: {
                userId,
                finishedAt: null,
            },
        });

        if (openWorkout) {
            await this.prisma.userWorkout.update({
                where: { id: openWorkout.id },
                data: {
                    finishedAt: new Date(),
                },
            });
        }

        // 2. cria novo treino
        return this.prisma.userWorkout.create({
            data: {
                userId,
                workoutId,
                startedAt: new Date(),
            },
        });
    }

    async finishWorkout(userId: string, dto: CreateUserWorkoutDto) {
        return this.prisma.$transaction(async (tx) => {

            const workout = await tx.userWorkout.findFirst({
                where: {
                    userId,
                    workoutId: dto.workoutId,
                    finishedAt: null,
                },
                orderBy: {
                    startedAt: "desc",
                },
            });

            if (!workout) throw new Error("Workout not started");

            const finishedAt = new Date();
            const duration =
                (finishedAt.getTime() - workout.startedAt.getTime()) / 1000;

            for (const ex of dto.exercises) {

                const createdExercise = await tx.userWorkoutExercise.create({
                    data: {
                        userWorkoutId: workout.id,
                        exerciseId: ex.exerciseId,
                    },
                });

                if (!ex.sets || ex.sets.length === 0) continue;

                await tx.userWorkoutExerciseSet.createMany({
                    data: ex.sets.map((set) => ({
                        userWorkoutExerciseId: createdExercise.id,
                        setNumber: set.setNumber,
                        reps: set.reps,
                        weight: set.weight,
                        durationSeconds: set.durationSeconds,
                    })),
                });
            }

            return tx.userWorkout.update({
                where: { id: workout.id },
                data: {
                    finishedAt,
                    totalDurationSeconds: Math.floor(duration),
                },
                include: {
                    exercises: {
                        include: {
                            userWorkoutExerciseSets: true,
                        },
                    },
                },
            });
        });
    }
}