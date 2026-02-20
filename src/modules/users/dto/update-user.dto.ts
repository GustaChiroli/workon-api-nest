import { IsDecimal, IsEnum, IsOptional, IsString } from "class-validator";
import { FitnessGoal } from "@prisma/client";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    fullName?: string;

    @IsOptional()
    @IsDecimal()
    weight?: number;

    @IsOptional()
    @IsDecimal()
    height?: number;

    @IsOptional()
    @IsEnum(FitnessGoal)
    fitnessGoal?: FitnessGoal;
}