import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from "@nestjs/common";
import { commentsService } from "./comments.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";

@Controller('comments')
export class CommentsController {
    constructor(private commentsService: commentsService) { }
    @Post('comment/:postId')
    @UseGuards(JwtAuthGuard)
    createComment(
        @Req() req,
        @Param('postId') postId: string,
        @Body() dto: CreateCommentDto,
    ) {
        return this.commentsService.createComment(
            req.user.id,
            postId,
            dto.content,
        );
    }

    @Get(':postId')
    @UseGuards(JwtAuthGuard)
    getComments(@Param('postId') postId: string) {
        return this.commentsService.getPostComments(postId);
    }

    @Delete(':commentId')
    @UseGuards(JwtAuthGuard)
    deleteComment(
        @Req() req,
        @Param('commentId') commentId: string,
    ) {
        return this.commentsService.deleteComment(req.user.id, commentId)
    }
}