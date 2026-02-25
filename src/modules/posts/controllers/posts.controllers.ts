
import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { PostsService } from "../services/posts.service";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";


@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Get('my-posts')
    @UseGuards(JwtAuthGuard)
    getMyPosts(@Req() req) {
        return this.postsService.getMyPosts(req.user.id);
    }

    @Post('my-posts')
    @UseGuards(JwtAuthGuard)
    createPost(@Req() req) {
        return this.postsService.createPost(req.user.id, req.body.caption, req.body.imageUrl);
    }

    @Get('feed')
    @UseGuards(JwtAuthGuard)
    getFeed(@Req() req) {
        return this.postsService.getFollowingFeed(req.user.id);
    }

}