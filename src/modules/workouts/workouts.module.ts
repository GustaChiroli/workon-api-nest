import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthModule } from "../auth/auth.module";
import { WorkoutsService } from "./services/workouts.service";
import { WorkoutsController } from "./controllers/workouts.controller";

@Module({
    imports: [
        PrismaModule,
        AuthModule,
    ],
    controllers: [
        WorkoutsController
    ],
    providers: [
        WorkoutsService
    ]
})
export class WorkoutsModule { }