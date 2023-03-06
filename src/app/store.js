import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './features/categorySlice';
import top5Reducer from './features/Top5Slice';
import pagesReducer from './features/pagesSlice';

export const store = configureStore({
	reducer: {
		category: categoryReducer,
		top5: top5Reducer,
		pages: pagesReducer
	},
});
