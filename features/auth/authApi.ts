import { apiSlice } from '../api/apiSlice';

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                url: '/api/auth/register',
                method: 'POST',
                body: data,
            }),

            async onQueryStarted(query, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    console.log(result.data);
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useSignUpMutation } = authApi;
