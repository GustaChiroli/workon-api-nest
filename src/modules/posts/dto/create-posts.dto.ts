import { IsOptional, IsString } from "class-validator";


export class CreatePostDTO {
    @IsString()
    caption: string;

    @IsOptional()
    @IsString()
    imageUrl?: string;
}