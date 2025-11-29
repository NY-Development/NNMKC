import { ConfigOptions, v2 as cloudinary } from 'cloudinary';
import { ConfigService } from '@nestjs/config';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  inject: [ConfigService],
  useFactory: (configService: ConfigService): ConfigOptions => {
    return cloudinary.config({
      cloud_name: configService.get('MEDIA_CLOUD_NAME'),
      api_key: configService.get('MEDIA_API_KEY'),
      api_secret: configService.get('MEDIA_API_SECRET'),
    });
  },
};
