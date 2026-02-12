import { createSlice } from '@reduxjs/toolkit';

const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        message: '',
        isVisible: false,
    },
    reducers: {
        showToast: (state, action) => {
            state.message = action.payload;
            state.isVisible = true;
        },
        hideToast: (state) => {
            state.isVisible = false;
        },
    },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
