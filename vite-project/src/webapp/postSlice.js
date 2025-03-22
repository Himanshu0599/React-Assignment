import { createSlice ,createAsyncThunk  } from "@reduxjs/toolkit";
import { getPosts,getPostById } from "../services/api";

// Thunks for fetching data
export const fetchPosts = createAsyncThunk('posts/fetchAll', getPosts);
export const fetchPostById = createAsyncThunk('posts/fetchById', getPostById);

const initialState={
    items:[]
}
const postSlice=createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPosts.fulfilled, (state, { payload }) => {
          state.items = payload;
        })
        .addCase(fetchPostById.fulfilled, (state, { payload }) => {
          state.items = [payload];  // Store single post as an array
        });
    }
})
export default postSlice.reducer