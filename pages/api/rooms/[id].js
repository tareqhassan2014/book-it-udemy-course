import nc from 'next-connect';
import connectDB from '../../../config/db.connect';
import {
    deleteRoom,
    getSingleRoom,
    updateRoom,
} from '../../../controller/room.controller';
import globalErrorHandler from '../../../middleware/globalErrorHandler';

const handler = nc({ onError: globalErrorHandler });

connectDB();

handler.get(getSingleRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
