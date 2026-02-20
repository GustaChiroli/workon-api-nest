import { Body, Controller, Get, Patch, Put, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/modules/auth/jwt.guard";
import { UpdateUserDto } from "../dto/update-user.dto";
import { UsersService } from "../services/users.service";
import { CurrentUser } from "src/modules/auth/current-user.decorator";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get('me')
    @UseGuards(JwtAuthGuard)
    me(@CurrentUser() user) {
        return this.usersService.findById(user.id);
    }


    @Patch('me')
    @UseGuards(JwtAuthGuard)
    updateMe(
        @Req() req,
        @Body() updateUserDto: UpdateUserDto
    ) {
        return this.usersService.updateUser(
            req.user.id,
            updateUserDto

        )
    }
}
