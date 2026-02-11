import { createSlice } from '@reduxjs/toolkit';

const getCartFromStorage = () => {
  const savedCart = localStorage.getItem('ghee_cart_redux');
  return savedCart ? JSON.parse(savedCart) : { items: [], totalAmount: 0 };
};

const initialState = {
  ...getCartFromStorage(),
  isCartOpen: false,
};

const parsePrice = (price) => {
  if (typeof price === 'number') return price;
  return parseFloat(price.replace(/,/g, '')) || 0;
};

const saveCartToStorage = (state) => {
  localStorage.setItem('ghee_cart_redux', JSON.stringify({
    items: state.items,
    totalAmount: state.totalAmount
  }));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: action.payload.quantity || 1,
        });
      } else {
        existingItem.quantity += (action.payload.quantity || 1);
      }

      state.totalAmount = state.items.reduce(
        (total, item) => total + parsePrice(item.price) * item.quantity,
        0
      );
      saveCartToStorage(state);
      state.isCartOpen = true; // Auto-open on add
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
        }
        state.totalAmount = state.items.reduce(
          (total, item) => total + parsePrice(item.price) * item.quantity,
          0
        );
        saveCartToStorage(state);
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalAmount = state.items.reduce(
          (total, item) => total + parsePrice(item.price) * item.quantity,
          0
        );
        saveCartToStorage(state);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      saveCartToStorage(state);
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    setCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    }
  },
});

export const { addItem, removeItem, deleteItem, clearCart, toggleCart, setCartOpen } = cartSlice.actions;
export default cartSlice.reducer;
