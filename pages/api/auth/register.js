import nc from 'next-connect';
import connectDB from '../../../config/db.connect';
import { registerUser } from '../../../controller/auth.controller';
import globalErrorHandler from '../../../middleware/globalErrorHandler';

const handler = nc({ onError: globalErrorHandler });

connectDB();

handler.post(registerUser);

export default handler;
