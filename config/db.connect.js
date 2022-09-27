import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState >= 1) {
            return;
        }

        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('connection database success');
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
