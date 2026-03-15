import { Injectable } from "@nestjs/common";
import { FitnessGoal, Difficulty, User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class WorkoutsService {

    constructor(private prisma: PrismaService) { }

    async getFreeWorkouts(user: { id: string }) {
        const userGoal = await this.prisma.user.findUnique({ where: { id: user.id, }, select: { fitnessGoal: true } })
        return this.prisma.workoutGroup.findMany({
            where: {
                goal: userGoal?.fitnessGoal ?? FitnessGoal.LOSE_WEIGHT
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

}
