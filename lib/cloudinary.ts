import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Configuration
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});
interface UploadFile extends File {
    filepath: string;
}
const upload = async (files: UploadFile[], path: string = 'images') => {
    const urls = [];
    for (const file of files) {
        const uploadResult = await cloudinary.uploader.upload(file.filepath, {
            folder: path,
        })
        if (uploadResult) {
            urls.push(uploadResult.secure_url);
        }
    }
    return urls;
};
export default upload;