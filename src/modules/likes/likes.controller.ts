import { Controller, Delete, Param, Post, Req, UseGuards } from "@nestjs/common";
import { likesService } from "./likes.service";
import { JwtAuthGuard } from "../auth/jwt.guard";

@Controller('likes')
export class LikesController {
    constructor(private likesService: likesService) { }
    @Post('like/:postId')
    @UseGuards(JwtAuthGuard)
    createLike(
        @Req() req,
        @Param('postId') postId: string,
    ) {
        return this.likesService.createLike(req.user.id, postId);
    }

    @Delete(':likeId')
    @UseGuards(JwtAuthGuard)
    deleteComment(
        @Req() req,
        @Param('likeId') likeId: string,
    ) {
        return this.likesService.deleteLike(req.user.id, likeId)
    }
}
