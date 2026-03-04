import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class CloudinaryService {
    constructor() {
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
        });
    }

    async uploadImage(file: Express.Multer.File) {
        return new Promise<any>((resolve, reject) => {
            cloudinary.uploader
                .upload_stream(
                    { folder: 'posts' }, // opcional, organiza no painel
                    (error, result) => {
                        if (error) return reject(error);
                        resolve(result);
                    },
                )
                .end(file.buffer);
        });
    }

    async deleteImage(publicId: string) {
        return cloudinary.uploader.destroy(publicId);
    }
}