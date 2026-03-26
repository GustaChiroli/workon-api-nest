import {
    Controller,
    Post,
    Body,
    UseGuards,
} from "@nestjs/common";
import { UserWorkoutService } from "../services/user.workout.service";
import { CurrentUser } from "src/modules/auth/current-user.decorator";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";
import { CreateUserWorkoutDto } from "../dto/create.user.workout.dto";

@Controller("user-workouts")
export class UserWorkoutController {
    constructor(private service: UserWorkoutService) { }

    @Post("start")
    @UseGuards(JwtAuthGuard)
    startWorkout(
        @CurrentUser() user,
        @Body("workoutId") workoutId: string,
    ) {
        return this.service.startWorkout(user.id, workoutId);
    }

    @Post("finish")
    @UseGuards(JwtAuthGuard)
    finishWorkout(
        @CurrentUser() user,
        @Body() dto: CreateUserWorkoutDto,
    ) {
        return this.service.finishWorkout(user.id, dto);
    }
}