import { apiSlice } from '../api/apiSlice';
import { addRoom } from './roomDetailsSlice';

export const roomDetailsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRoom: builder.query({
            query: (roomId) => `/api/rooms/${roomId}`,

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    dispatch(addRoom(result.data));
                    // console.log('dispatched', result.data);
                } catch (err) {
                    console.log(err);
                }
            },
        }),
    }),
});

export const { useGetRoomQuery } = roomDetailsApi;
