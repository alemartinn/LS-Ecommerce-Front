import { createSlice } from '@reduxjs/toolkit';
    const initialState = {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
    }
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find((item) => item._id === action.payload._id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            } localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        incrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item._id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item._id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cartItems.filter((item) => item._id !== action.payload._id);
            state.cartItems = removeItem;
        },
        emptyCart: (state, action) => {
            state.cartItems = []
            
        }
    },
});

export const cartReducer = cartSlice.reducer;
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
} = cartSlice.actions;
