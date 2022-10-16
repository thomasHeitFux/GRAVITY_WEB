import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const modalSlice = createSlice({
	name: 'modal',
    initialState: null,
    reducers: {
        setModal: (state, action) => action.payload,
    }
})

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;