import cloudinary from 'cloudinary';
import catchAsync from '../middleware/catchAsync';
import userSchema from '../model/user.model';

//setting up cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Register user => /api/auth/register
export const registerUser = catchAsync(async (req, res, next) => {
    const { name, email, password, avatar } = req.body;
    const result = await cloudinary.v2.uploader.upload(avatar, {
        folder: 'bookit/avatars',
        width: 150,
        crop: 'scale',
    });

    const user = await userSchema.create({
        name,
        email,
        password,
        avatar: {
            public_id: result.public_id,
            url: result.secure_url,
        },
    });

    res.status(201).json({
        success: true,
        message: 'Account registered successfully',
    });
});
