import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthModule } from "../auth/auth.module";
import { WorkoutsService } from "./services/workouts.service";
import { WorkoutsController } from "./controllers/workouts.controller";
import { UserWorkoutController } from "./controllers/user.workout.controller";
import { UserWorkoutService } from "./services/user.workout.service";

@Module({
    imports: [
        PrismaModule,
        AuthModule,
    ],
    controllers: [
        WorkoutsController,
        UserWorkoutController
    ],
    providers: [
        WorkoutsService,
        UserWorkoutService
    ]
})
export class WorkoutsModule { }