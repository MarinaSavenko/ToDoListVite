import { configureStore } from '@reduxjs/toolkit';
import addedReducer from '../features/counter/addedSlice';

const store = configureStore({
    reducer: {
        added: addedReducer, // Замените на ваши редьюсеры
    },
});

export default store;