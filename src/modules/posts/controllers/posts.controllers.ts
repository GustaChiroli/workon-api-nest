
import { Body, Controller, Delete, Get, Param, Post, Req, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { PostsService } from "../services/posts.service";


@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Get('my-posts')
    @UseGuards(JwtAuthGuard)
    getMyPosts(@Req() req) {
        return this.postsService.getMyPosts(req.user.id);
    }

    @Post('my-posts')
    @UseInterceptors(FileInterceptor('image'))
    @UseGuards(JwtAuthGuard)
    async createPost(
        @Req() req,
        @Body('caption') caption: string,
        @UploadedFile() file?: Express.Multer.File,
    ) {
        return this.postsService.createPost(req.user.id, caption, file);
    }


    @Delete('my-posts/:postId')
    @UseGuards(JwtAuthGuard)
    deleteFollow(@Req() req, @Param('postId') postId: string) {
        return this.postsService.deletePost(postId, req.user.id)
    }

    @Get('feed')
    @UseGuards(JwtAuthGuard)
    getFeed(@Req() req) {
        return this.postsService.getFollowingFeed(req.user.id);
    }

}