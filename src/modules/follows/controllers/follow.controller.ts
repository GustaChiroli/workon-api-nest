import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from "@nestjs/common";
import { CurrentUser } from "src/modules/auth/current-user.decorator";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";
import { FollowsService } from "../services/follows.service";
import { CreateFollowDto } from "../dto/create-follow.dto";


@Controller('follows')
export class FollowsController {
    constructor(private readonly followsService: FollowsService) { }

    @Get('following')
    @UseGuards(JwtAuthGuard)
    me(@CurrentUser() user) {
        return this.followsService.findMyFollowingsById(user.id);
    }

    @Post('follow')
    @UseGuards(JwtAuthGuard)
    createFollow(@Req() req, @Body() dto: CreateFollowDto) {
        return this.followsService.createFollow(req.user.id, dto.followingId)
    }

    @Delete('unfollow/:followingId')
    @UseGuards(JwtAuthGuard)
    deleteFollow(@Req() req, @Param('followingId') followingId: string) {
        return this.followsService.deleteFollow(req.user.id, followingId)
    }

}