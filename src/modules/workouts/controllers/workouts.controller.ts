import { Controller, Get, Query, Req, UseGuards } from "@nestjs/common";
import { Difficulty, FitnessGoal } from "@prisma/client";
import { WorkoutsService } from "../services/workouts.service";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";

@Controller("workouts")
export class WorkoutsController {
    constructor(private readonly workoutsService: WorkoutsService) { }

    @Get("free")
    @UseGuards(JwtAuthGuard)
    async getFreeWorkouts(
        @Req() req,
    ) {
        return this.workoutsService.getFreeWorkouts(req.user);
    }
}