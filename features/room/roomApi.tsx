import { apiSlice } from '../api/apiSlice';
import { addRooms } from './roomSlice';

export const roomApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRooms: builder.query({
            query: (query) => `/api/rooms${query}`,

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    dispatch(addRooms(result.data));
                    console.log('set rooms');
                } catch (err) {
                    console.log(err);
                }
            },
        }),
    }),
});

export const { useGetRoomsQuery } = roomApi;
