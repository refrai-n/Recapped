import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	isOpen: false
};

const burgerMenuSlice = createSlice({
	name: 'isOpen',
	initialState: initialState,
	reducers:{
		setIsOpen: (state, action) =>{
			state.isOpen = action.payload;
		}
	}
});

export const {setIsOpen} = burgerMenuSlice.actions

export default burgerMenuSlice.reducer