import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService) { }

    async getMyPosts(userId: string) {
        return this.prisma.post.findMany({
            where: {
                userId: userId
            },
            orderBy: { createdAt: 'desc' },
            include: {
                _count: {
                    select: {
                        likes: true,
                        comments: true,
                    }
                }
            }
        });
    }

    async createPost(userId: string, caption: string, imageUrl?: string) {
        return this.prisma.post.create({
            data: {
                userId,
                caption,
                imageUrl,
            }
        });
    }

    async getFollowingFeed(userId: string) {
        const following = await this.prisma.follow.findMany({
            where: {
                followerId: userId
            },
            select: {
                followingId: true
            },
        });
        const followingIds = following.map(f => f.followingId);

        if (followingIds.length === 0) {
            return [];
        }
        return this.prisma.post.findMany({
            where: {
                userId: { in: followingIds }
            },
            orderBy: { createdAt: 'desc' },
            include: {
                user: true,
                _count: {
                    select: {
                        likes: true,
                        comments: true,
                    }
                }
            }
        });
    }

}