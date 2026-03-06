import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CloudinaryService } from 'src/modules/cloudinary/cloudinary.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService, private cloudinaryService: CloudinaryService) { }

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
                imageUrl: true,
                createdAt: true,
            },
        });
    }

    findByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                fullName: true,
                role: true,
                createdAt: true,
                imageUrl: true,
                following: {
                    select: {
                        id: true,
                        following: {
                            select: {
                                fullName: true,
                                email: true,
                                id: true,
                            }
                        }
                    }
                },
                followers: {
                    select: {
                        id: true,
                        follower: {
                            select: {
                                fullName: true,
                                email: true,
                                id: true,
                                followers: true
                            }
                        }
                    }
                },
            },
        });
    }

    async updateUser(userId: string, data: UpdateUserDto, file?: Express.Multer.File) {

        let imageUrl: string | undefined;
        let imagePublicId: string | undefined;

        if (file) {

            const user = await this.prisma.user.findUnique({
                where: { id: userId }
            });

            if (user?.imagePublicId) {
                await this.cloudinaryService.deleteImage(user.imagePublicId);
            }

            const upload = await this.cloudinaryService.uploadImage(file);

            imageUrl = upload.secure_url;
            imagePublicId = upload.public_id;
        }

        return this.prisma.user.update({
            where: { id: userId },
            data: {
                ...data,
                ...(imageUrl && { imageUrl }),
                ...(imagePublicId && { imagePublicId }),
            },
        });
    }
}
