import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTop5 = createAsyncThunk(
	'top5/getTop5',
	async (category, { getState, rejectWithValue }) => {
		console.log(getState());
		try {
			const req = await axios.get(
				`https://www.reddit.com/r/${category}/top.json?t=day&limit=5`
			);
			const response = req.data.data.children;
			const titlesArray = [];
			for (let i = 0; i < 5; i++) {
				titlesArray.push(response[i].data.title);
			}
			return titlesArray;
		} catch (error) {
			rejectWithValue(error.response);
		}
	}
);

const initialState = {
	data: [],
	isLoading: true,
	isSuccess: false,
	isRejected: false,
};

const top5Slice = createSlice({
	name: 'top5',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getTop5.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(getTop5.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isSuccess = true;
			state.data = action.payload;
		});
		builder.addCase(getTop5.rejected, (state, action) => {
			state.isLoading = false;
			state.isRejected = true;
		});
	},
});

export default top5Slice.reducer;
