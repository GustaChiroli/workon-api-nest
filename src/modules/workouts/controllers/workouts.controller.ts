import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { WorkoutsService } from "../services/workouts.service";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";
import { CurrentUser } from "src/modules/auth/current-user.decorator";
import { CreateWorkoutGroupDto } from "../dto/create.workout.user.dto";

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

    @Get("my")
    @UseGuards(JwtAuthGuard)
    async getMyWorkouts(
        @Req() req,
    ) {
        return this.workoutsService.getCreatedByUserWorkouts(req.user);
    }

    @Post("my")
    @UseGuards(JwtAuthGuard)
    finishWorkout(
        @CurrentUser() user,
        @Body() dto: CreateWorkoutGroupDto,
    ) {
        return this.workoutsService.createCustomWorkout(user.id, dto);
    }

}