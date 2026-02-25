import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthModule } from "../auth/auth.module";
import { FollowsController } from "./controllers/follow.controller";
import { FollowsService } from "./services/follows.service";


@Module({
    imports: [
        PrismaModule,
        AuthModule,
    ],
    controllers: [
        FollowsController
    ],
    providers: [
        FollowsService
    ],
})
export class FollowsModule { }