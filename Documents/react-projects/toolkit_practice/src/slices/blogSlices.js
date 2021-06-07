import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const createNewPost = createAsyncThunk(
    'blog/createNewPost',
    async (payload, thunkAPI) =>
    {
        try {
            console.log('axiso here')
            const res = await axios.post('http://127.0.0.1:8000/blogs', payload)
            return res.data
        }catch(error)
        {
            return thunkAPI.rejectWithValue({ error: error.message });
        }   
        
    }
)

export const fetchPosts = createAsyncThunk(
    'blog/fetchPosts',
    async (payload, thunkAPI) =>
    {
        const res = await axios.get('http://127.0.0.1:8000/blogs')
        return res.data
    }
)


const blogSlice = createSlice({
    name:'blog',
    initialState: {
        blogs: [],
        searchedBlogs: [],
    },
    reducers:
    {
        getPosts: (state, {payload}) =>
        {
            // return {blogs: [...state.blogs, ...payload]}
            // return {...state, blogs: [...payload]}
            return Object.assign({}, state, {blogs : [...payload]})
        },
        getPostByID : (state, {payload}) =>
        {
            // console.log(payload.id)
            
            // return {blogs: [...state.blogs, ...payload]}
           let q = state.blogs.filter(item => item.id === payload)
        //    state.searchedBlogs = q
           const filters=  {...state, searchedBlogs : q}
           return filters
        },
        removePosts: (state) =>
        {
            return {...state, searchedBlogs: [], blogs : []}
        },
        addNewPost : (state, action) =>
        {
            let q =  state.blogs.map((data) => data.id)
            q = Math.max(...q) +1
            // const {body, title} = action.payload
            action.payload.id = q

            state.blogs.push(action.payload)
            
        },

    },
    extraReducers:
    {
        [createNewPost.fulfilled] : (state,action) =>
        {
            console.log('push here')
            state.blogs.push(action.payload)
        },
        [fetchPosts.fulfilled] : (state,action) =>
        {
            return Object.assign({}, state, {blogs : [...action.payload]})
        }
    }
})

export const {getPosts, getPostByID, removePosts, addNewPost} = blogSlice.actions
export default blogSlice.reducer