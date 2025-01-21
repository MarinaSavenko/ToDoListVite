import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer, // Замените на ваши редьюсеры
    },
});

export default store;