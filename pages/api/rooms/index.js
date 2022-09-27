import nextConnect from 'next-connect';
import connectDB from '../../../config/db.connect';
import { createRoom, getAllRooms } from '../../../controller/room.controller';
import globalErrorHandler from '../../../middleware/globalErrorHandler';

const handler = nextConnect({ onError: globalErrorHandler });

connectDB();

handler.get(getAllRooms);
handler.post(createRoom);

export default handler;
