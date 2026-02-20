import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    findById(id: string) {
        return this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                role: true,
                fullName: true,
                weight: true,
                height: true,
                fitnessGoal: true,
                createdAt: true,
            },
        });
    }

    async updateUser(userId: string, data: UpdateUserDto) {
        return this.prisma.user.update({
            where: { id: userId },
            data,
        });
    }
}
