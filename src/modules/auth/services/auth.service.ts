import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Role } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) { }

    async register(email: string, password: string, role: Role) {
        const existing = await this.prisma.user.findUnique({
            where: { email },
        });

        if (existing) {
            throw new Error('User already exists');
        }

        const hash = await bcrypt.hash(password, 10);

        const user = await this.prisma.user.create({
            data: {
                email,
                passwordHash: hash,
                role,
            },
        });

        return this.generateToken(user.id, user.email, user.role);
    }

    async login(email: string, password: string) {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });

        if (!user) throw new UnauthorizedException();

        const valid = await bcrypt.compare(password, user.passwordHash);

        if (!valid) throw new UnauthorizedException();

        return this.generateToken(user.id, user.email, user.role);
    }

    private generateToken(id: string, email: string, role: Role) {
        const payload = { sub: id, email, role };

        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id,
                email,
                role,
            },
        };
    }
}
