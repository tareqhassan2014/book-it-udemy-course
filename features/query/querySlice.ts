import { createSlice } from '@reduxjs/toolkit';

interface RoomState {
    location: string;
    page: number;
    limit: number;
    fetchAgain: number;
}

const initialState = {
    location: '',
    page: 1,
    limit: 12,
    fetchAgain: 0,
} as RoomState;

const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        setQuery: (state, { payload }) => {
            // iterate over the payload and update the state
            Object.keys(payload).forEach((key) => {
                // @ts-ignore
                state[key] = payload[key];
            });

            state.fetchAgain += 1;
        },
    },
});

export const { setQuery } = querySlice.actions;
export default querySlice.reducer;
