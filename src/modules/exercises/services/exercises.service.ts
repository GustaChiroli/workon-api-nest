import { Injectable } from "@nestjs/common";
import { MuscleGroup } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ExercisesService {
    constructor(private prisma: PrismaService) { }
    async getFreeExercises(muscleGroup?: MuscleGroup) {
        return this.prisma.exercise.findMany({
            where: muscleGroup
                ? { muscleGroup }
                : undefined,
            orderBy: {
                name: "asc",
            },
            select: {
                id: true,
                name: true,
                description: true,
                muscleGroup: true,
                isCardio: true,
            }
        })
    }
}