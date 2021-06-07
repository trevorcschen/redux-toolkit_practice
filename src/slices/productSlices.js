import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    products :[], isLoading: false
}

const productSlices = createSlice({
    name:'products',
    initialState,
    reducers:
    {
        getProducts : (state,action) =>
        {

            return Object.assign({}, state, {products : [...action.payload], isLoading:false})
        },
        startFetching : (state,action)=>
        {
            state.isLoading = true
        }
    }
})


export const {getProducts ,startFetching} = productSlices.actions
export default productSlices.reducer