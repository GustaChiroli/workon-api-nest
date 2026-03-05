import { Module } from "@nestjs/common";
import { likesService } from "./likes.service";
import { LikesController } from "./likes.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthModule } from "../auth/auth.module";

@Module({
    controllers: [LikesController],
    providers: [likesService],
    imports: [PrismaModule, AuthModule]
})
export class LikesModule { }