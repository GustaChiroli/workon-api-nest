import { Injectable } from "@nestjs/common";
import { CloudinaryService } from "src/modules/cloudinary/cloudinary.service";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService, private cloudinaryService: CloudinaryService) { }

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
                },
                comments: {
                    select: {
                        user: true,
                        content: true,
                        createdAt: true,
                    }
                },
                user: {
                    select: {
                        fullName: true,
                    }
                }
            }
        });
    }

    async createPost(userId: string, caption: string, file?: Express.Multer.File) {
        let imageUrl: string | undefined;
        let publicId: string | undefined;

        if (file) {
            const uploadResult = await this.cloudinaryService.uploadImage(file);
            imageUrl = uploadResult.secure_url;
            publicId = uploadResult.public_id;
        }
        return this.prisma.post.create({
            data: {
                userId,
                caption,
                imageUrl,
                imagePublicId: publicId,
            }
        });
    }

    async deletePost(postId: string, userId: string) {
        const post = await this.prisma.post.findUnique({
            where: { id: postId },
        });

        if (!post) throw new Error('Post not found');

        if (userId != post.userId) throw new Error('You Can only delete your posts');

        if (post.imagePublicId) {
            await this.cloudinaryService.deleteImage(post.imagePublicId);
        }

        return this.prisma.post.delete({
            where: { id: postId },
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