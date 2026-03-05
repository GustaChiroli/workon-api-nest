import { Module } from "@nestjs/common";
import { CommentsController } from "./comments.controller";
import { commentsService } from "./comments.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthModule } from "../auth/auth.module";

@Module({
    controllers: [CommentsController],
    providers: [commentsService],
    imports: [PrismaModule, AuthModule]
})
export class CommentsModule { }