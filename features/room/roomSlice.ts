import { createSlice } from '@reduxjs/toolkit';

interface RoomState {
    rooms: Room[];
    totalRooms: number;
    error: string | null;
}

const initialState = {
    rooms: [],
    totalRooms: 0,
    error: null,
} as RoomState;

const roomSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        addRooms: (state, action) => {
            state.rooms = action.payload.rooms;
            state.totalRooms = action.payload.count;
        },
    },
});

export const { addRooms } = roomSlice.actions;
export default roomSlice.reducer;
