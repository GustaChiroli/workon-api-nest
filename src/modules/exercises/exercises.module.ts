import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthModule } from "../auth/auth.module";
import { ExercisesController } from "./controllers/exercises.controller";
import { ExercisesService } from "./services/exercises.service";

@Module({
    imports: [
        PrismaModule,
        AuthModule
    ],
    controllers: [
        ExercisesController,
    ],
    providers: [
        ExercisesService,
    ],
})
export class ExercisesModule { }