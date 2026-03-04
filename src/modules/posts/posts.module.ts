import { PrismaModule } from "src/prisma/prisma.module";
import { AuthModule } from "../auth/auth.module";
import { Module } from "@nestjs/common";
import { PostsService } from "./services/posts.service";
import { PostsController } from "./controllers/posts.controllers";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { CloudinaryModule } from "../cloudinary/cloudinary.module";


@Module({
    imports: [
        PrismaModule,
        AuthModule,
        CloudinaryModule
    ],
    controllers: [
        PostsController
    ],
    providers: [PostsService, CloudinaryService],
})
export class PostsModule { }