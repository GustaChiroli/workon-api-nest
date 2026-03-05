import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class commentsService {
    constructor(private prisma: PrismaService) {
    }
    async createComment(
        userId: string,
        postId: string,
        content: string,
    ) {
        const post = await this.prisma.post.findUnique({
            where: { id: postId },
        });

        if (!post) {
            throw new NotFoundException('Post not found');
        }

        return this.prisma.comment.create({
            data: {
                userId,
                postId,
                content,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        fullName: true,
                    }
                }
            }
        })
    }

    async getPostComments(postId: string) {
        return this.prisma.comment.findMany({
            where: { postId },
            orderBy: { createdAt: 'desc' },
            include: {
                user: {
                    select: {
                        id: true,
                        fullName: true,
                    }
                }
            }
        })
    }

    async deleteComment(userId: string, commentId: string) {
        const comment = await this.prisma.comment.findUnique({
            where: { id: commentId },
        });
        if (!comment) {
            throw new NotFoundException('Comment not found');
        }

        if (comment.userId !== userId) {
            throw new ForbiddenException('You cannot delete this comment');
        }
        return this.prisma.comment.delete({
            where: { id: commentId },
        });
    }
}