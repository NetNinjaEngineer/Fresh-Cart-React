import {
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
    FETCH_WISHLIST_SUCCESS,
    FETCH_WISHLIST_FAILURE,
    ADD_TO_WISHLIST_SUCCESS,
    ADD_TO_WISHLIST_FAILURE,
    REMOVE_FROM_WISHLIST_SUCCESS,
    REMOVE_FROM_WISHLIST_FAILURE,
} from '../actions/cartActions.js'; // Assuming you import action types from the actions file

const initialState = {
    items: [], // Array of cart items
    totalItems: 0, // Total number of items in the cart
    totalPrice: 0, // Total price of all items in the cart
    error: null, // Error message for failed actions
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART_SUCCESS: {
            return {
                ...state,
                items: [...state.items, action.payload.item], // Add the new item to the cart
                totalItems: state.totalItems + 1, // Increment total items
                totalPrice: state.totalPrice + action.payload.item.price, // Add the price of the new item
            };
        }

        case ADD_TO_CART_FAILURE: {
            return {
                ...state,
                error: action.payload, // Save error message if failed
            };
        }

        case FETCH_WISHLIST_SUCCESS: {
            return {
                ...state,
                // You can update the state with fetched wishlist data if needed
                // For example, you could add a wishlist property to your state
            };
        }

        case FETCH_WISHLIST_FAILURE: {
            return {
                ...state,
                error: action.payload, // Save error message if failed
            };
        }

        case ADD_TO_WISHLIST_SUCCESS: {
            // Handle the case where an item is added to the wishlist
            return {
                ...state,
                // You can update the state with the added wishlist item data if needed
            };
        }

        case ADD_TO_WISHLIST_FAILURE: {
            return {
                ...state,
                error: action.payload, // Save error message if failed
            };
        }

        case REMOVE_FROM_WISHLIST_SUCCESS: {
            // Handle the case where an item is removed from the wishlist
            return {
                ...state,
                // You can update the state with removed wishlist item data if needed
            };
        }

        case REMOVE_FROM_WISHLIST_FAILURE: {
            return {
                ...state,
                error: action.payload, // Save error message if failed
            };
        }

        case 'cart/removeItem': {
            return {
                ...state,
                items: action.payload.items,
                totalItems: action.payload.totalItems,
                totalPrice: action.payload.totalPrice,
            };
        }

        case 'cart/updateQuantity': {
            return {
                ...state,
                items: action.payload.items,
                totalItems: action.payload.totalItems,
                totalPrice: action.payload.totalPrice,
            };
        }

        case 'cart/clearCart': {
            return initialState;
        }

        default:
            return state;
    }
};

export default cartReducer;
