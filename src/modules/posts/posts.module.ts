import { PrismaModule } from "src/prisma/prisma.module";
import { AuthModule } from "../auth/auth.module";
import { Module } from "@nestjs/common";
import { PostsService } from "./services/posts.service";
import { PostsController } from "./controllers/posts.controllers";


@Module({
    imports: [
        PrismaModule,
        AuthModule,
    ],
    controllers: [
        PostsController
    ],
    providers: [PostsService],
})
export class PostsModule { }