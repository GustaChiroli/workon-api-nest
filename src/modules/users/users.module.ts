import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
    imports: [
        PrismaModule,
        AuthModule,
        CloudinaryModule,
    ],
    controllers: [UsersController],
    providers: [UsersService, CloudinaryService],
})
export class UsersModule { }
