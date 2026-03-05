import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class likesService {
    constructor(private prisma: PrismaService) { }

    async createLike(userId: string, postId: string) {
        const post = await this.prisma.post.findUnique({
            where: { id: postId },
        });

        if (!post) {
            throw new NotFoundException('Post not found');
        }

        const existingLike = await this.prisma.like.findUnique({
            where: {
                userId_postId: {
                    userId,
                    postId,
                },
            },
        });

        if (existingLike) {
            return existingLike; // já está curtido
        }

        return this.prisma.like.create({
            data: {
                userId,
                postId,
            },
        });
    }

    async deleteLike(userId: string, likeId: string) {
        const like = await this.prisma.like.findUnique({
            where: { id: likeId },
        });
        if (!like) {
            throw new NotFoundException('Like not found');
        }

        if (like.userId !== userId) {
            throw new ForbiddenException('You cannot delete this like');
        }
        return this.prisma.like.delete({
            where: { id: likeId },
        });
    }

}
