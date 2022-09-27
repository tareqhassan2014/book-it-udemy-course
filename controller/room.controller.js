import catchAsync from '../middleware/catchAsync';
import roomModel from '../model/room.model';
import APIFeatures from '../utils/apiFeatures';
import AppError from '../utils/appError';

// get all rooms => /api/rooms
const getAllRooms = catchAsync(async (req, res, next) => {
    // query string => /api/rooms?sort=price&limit=2&page=1
    const apiFeatures = new APIFeatures(roomModel.find(), req.query)
        .search()
        .filter()
        .sort()
        .limitFields()
        .paginate();

    const rooms = await apiFeatures.query;
    res.status(200).json({ success: true, count: rooms.length, rooms });
});

// create new room => /api/rooms
const createRoom = catchAsync(async (req, res, next) => {
    const room = await roomModel.create(req.body);
    res.status(201).json({ success: true, room });
});

// get single room details => /api/rooms/:id
const getSingleRoom = catchAsync(async (req, res, next) => {
    const room = await roomModel.findById(req.query.id);
    if (!room) {
        return next(new AppError('Room not found with this id', 404));
    }
    res.status(200).json({ success: true, room });
});

// update room => /api/rooms/:id
const updateRoom = catchAsync(async (req, res, next) => {
    let room = await roomModel.findById(req.query.id);
    if (!room) {
        return next(new AppError('Room not found with this id', 404));
    }

    room = await roomModel.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({ success: true, room });
});

// delete room => /api/rooms/:id
const deleteRoom = catchAsync(async (req, res, next) => {
    const room = await roomModel.findById(req.query.id);
    if (!room) {
        return next(new AppError('Room not found with this id', 404));
    }
    await room.remove();
    res.status(200).json({ success: true, message: 'Room is deleted.' });
});

export { getAllRooms, createRoom, getSingleRoom, updateRoom, deleteRoom };
