import { Injectable, BadRequestException } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';
import { CloudinaryResponse } from './cloudinary-response';

@Injectable()
export class MediaService {
  async uploadImage(file: Express.Multer.File): Promise<CloudinaryResponse> {
    if (!file) {
      throw new BadRequestException('No file provided');
    }

    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'nnmkc_cms', // Organized folder in Cloudinary
        },
        (error, result) => {
          if (error)
            return reject(
              new Error(error.message || 'Cloudinary upload failed'),
            );
          if (!result) {
            return reject(new Error('Cloudinary returned no result'));
          }
          resolve(result);
        },
      );

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
      Readable.from(file.buffer).pipe(uploadStream);
    });
  }

  async deleteImage(publicId: string): Promise<any> {
    return cloudinary.uploader.destroy(publicId);
  }

  async getImages(): Promise<any> {
    // Fetch stored images from the specific folder
    return cloudinary.api.resources({
      type: 'upload',
      prefix: 'nnmkc_cms', // Only get images from our folder
      max_results: 50,
    });
  }
}
