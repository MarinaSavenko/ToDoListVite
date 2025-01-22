import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AddedState {
    values: string[];
}

const initialState: AddedState = {
    values: [],
}
const addedSlice = createSlice({
    name: 'added',
    initialState,
    reducers: {
       setNewValue: (state: AddedState , action: PayloadAction<string>) => {
            state.values.push(action.payload);
        },
       setValue: (state: AddedState , action: PayloadAction<string[]>) => {
            state.values = action.payload;
        },

    },
});

export const { setNewValue, setValue } = addedSlice.actions;

export default addedSlice.reducer;
