import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { MuscleGroup } from "@prisma/client";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";
import { ExercisesService } from "../services/exercises.service";

@Controller("exercises")
export class ExercisesController {
    constructor(private readonly exercises: ExercisesService) { }

    @Get("free")
    @UseGuards(JwtAuthGuard)
    async getFreeExercises(@Query("muscleGroup") muscleGroup?: MuscleGroup) {
        return this.exercises.getFreeExercises(muscleGroup);
    }
}