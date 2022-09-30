import { createSlice } from '@reduxjs/toolkit';

interface RoomState {
    room: Room | null;
    error: string | null;
}

const initialState = {
    room: null,
    error: null,
} as RoomState;

const roomDetailsSlice = createSlice({
    name: 'roomDetails',
    initialState,
    reducers: {
        addRoom: (state, action) => {
            state.room = action.payload.room;
            state.error = null;
        },
    },
});

export const { addRoom } = roomDetailsSlice.actions;
export default roomDetailsSlice.reducer;
