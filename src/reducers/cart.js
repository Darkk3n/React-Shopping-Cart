export const cartInitialState = [];

export const CART_ACTION_TYPES = {
   ADD_TO_CART: 'ADD_TO_CART',
   REMOVE_FROM_CART: 'REMOVE_FROM_CART',
   CLEAR_CART: 'CLEAR_CART'
}

export const cartReducer = (state, action) => {
   const { type: actionType, payload: actionPayLoad } = action;
   switch (actionType) {
      case CART_ACTION_TYPES.ADD_TO_CART: {
         const { id } = actionPayLoad;
         const productInCart = state.findIndex((item) => item.id === id);
         if (productInCart >= 0) {
            //Option 1
            const newState = structuredClone(state);
            newState[productInCart].quantity += 1;
            return newState;
         }
         return [
            ...state,
            {
               ...actionPayLoad,
               quantity: 1,
            },
         ];
      }
      case CART_ACTION_TYPES.REMOVE_FROM_CART: {
         const { id } = actionPayLoad;
         return state.filter((item) => item.id !== id);
      }
      case CART_ACTION_TYPES.CLEAR_CART: {
         return cartInitialState;
      }
      default:
         break;
   }

   return state;
};