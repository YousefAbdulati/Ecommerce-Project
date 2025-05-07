import { createSlice } from "@reduxjs/toolkit";

const cartItemSlice = createSlice({
    name: 'cartItems',
    initialState: {
        items: {}, 
        numberOfItems: 0
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            if (state.items[item.id]) {
                state.items[item.id].quantity += 1;
            } else {
                state.items[item.id] = { ...item, quantity: 1 };
            }
            state.numberOfItems += 1;
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            if (state.items[itemId]) {
                state.numberOfItems -= state.items[itemId].quantity;
                delete state.items[itemId];
            }
        },
        increaseByOne: (state, action) => {
            const itemId = action.payload;
            if (state.items[itemId]) {
                state.items[itemId].quantity += 1;
                state.numberOfItems += 1;
            }
        },
        decreaseByOne: (state, action) => {
            const itemId = action.payload;
            if (state.items[itemId]) {
                state.items[itemId].quantity -= 1;
                state.numberOfItems -= 1;

                if (state.items[itemId].quantity <= 0) {
                    delete state.items[itemId];
                }
            }
        }
    }
});

export const { addItem, removeItem, increaseByOne, decreaseByOne } = cartItemSlice.actions;
export default cartItemSlice.reducer;
