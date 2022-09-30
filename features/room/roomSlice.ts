import { createSlice } from '@reduxjs/toolkit';

interface RoomState {
    rooms: Room[];
    total: number;
    error: string | null;
    results: number;
}

const initialState = {
    rooms: [],
    total: 0,
    error: null,
    results: 0,
} as RoomState;

const roomSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        addRooms: (state, action) => {
            state.rooms = action.payload.rooms;
            state.total = action.payload.total;
            state.results = action.payload.results;
        },
    },
});

export const { addRooms } = roomSlice.actions;
export default roomSlice.reducer;
