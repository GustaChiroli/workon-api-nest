import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class FollowsService {
    constructor(private prisma: PrismaService) { }

    async findMyFollowingsById(id: string) {
        return this.prisma.follow.findMany({
            where: { id },
            select: {
                followingId: true,
                follower: true,
            },
        });
    }

    async createFollow(userId: string, followedId: string) {
        if (userId === followedId) {
            throw new BadRequestException("Você não pode seguir a si mesmo");
        }
        return this.prisma.follow.create({
            data: {
                followerId: userId,
                followingId: followedId,
            }
        });
    }
}