import {
    Action,
    AnyAction,
    combineReducers,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { apiSlice } from '../features/api/apiSlice';
import { counterReducer } from '../features/counter';
import roomSlice from '../features/room/roomSlice';

const combinedReducer = combineReducers({
    counter: counterReducer,
    rooms: roomSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

const reducer = (
    state: ReturnType<typeof combinedReducer>,
    action: AnyAction
) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};

export const makeStore = () =>
    configureStore({
        // @ts-ignore
        reducer,
        devTools: process.env.NODE_ENV !== 'production',
        //@ts-ignore
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(apiSlice.middleware),
    });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

// export const wrapper = createWrapper(makeStore, { debug: true });
export const wrapper = createWrapper(makeStore);
