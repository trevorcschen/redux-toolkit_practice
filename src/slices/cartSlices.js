import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems : [], isOpened : false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:
    {
        addToCart : (state,{payload}) =>
        {
            const isExisted = state.cartItems.find((item) => item.id === payload.id)
            if(isExisted)
            {
                return {...state, cartItems :state.cartItems.map((item) => 
                    item.id === payload.id ?
                     {...item, quantity : item.quantity+1}
                     : item) };
            }
            else
            {
                state.cartItems.push({...payload, quantity: 1})
            }

        },
        increment :(state,{payload})=>
        {
            return {...state, 
                cartItems: state.cartItems.map((item) =>
                item.id === payload.id 
                ?
                {...item, quantity: item.quantity+1}
                 : 
                 item)
                }
        },
        decrement :(state,{payload})=>
        {
            return {...state, 
                cartItems: state.cartItems.map((item) =>
                item.id === payload.id 
                ?
                {...item, quantity: item.quantity-1}
                 : 
                 item)
                }
        },
        clearCart: (state, action)=>
        {
            console.log('clear')
            state.cartItems = []
        },
        removeFromCart: (state,action) =>
        {

        },
        toggledCart : (state, action) =>
        {
            state.isOpened = !state.isOpened
        },
    }
})

export const {addToCart, increment, decrement, clearCart , removeFromCart, toggledCart} = cartSlice.actions

export default cartSlice.reducer