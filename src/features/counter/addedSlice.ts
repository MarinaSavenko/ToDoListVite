import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AddedState {
    value: string[];
}

const initialState: AddedState = {
    value: [],
}
const addedSlice = createSlice({
    name: 'added',
    initialState,
    reducers: {
       setNewValue: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload);
        },
    },
});

export const { setNewValue } = addedSlice.actions;

export default addedSlice.reducer;
