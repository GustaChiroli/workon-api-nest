import { Body, Controller, Get, Param, Patch, Put, Query, Req, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";
import { UpdateUserDto } from "../dto/update-user.dto";
import { UsersService } from "../services/users.service";
import { CurrentUser } from "src/modules/auth/current-user.decorator";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get('me')
    @UseGuards(JwtAuthGuard)
    me(@CurrentUser() user) {
        return this.usersService.findById(user.id);
    }

    @Get('user-by-email/:email')
    @UseGuards(JwtAuthGuard)
    searchUserByEmail(@Param('email') email: string) {
        return this.usersService.findByEmail(email);
    }

    @Patch('me')
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor('image'))
    updateMe(
        @Req() req,
        @Body() updateUserDto: UpdateUserDto,
        @UploadedFile() file?: Express.Multer.File
    ) {
        return this.usersService.updateUser(
            req.user.id,
            updateUserDto,
            file

        )
    }
}
