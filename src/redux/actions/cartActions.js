import axios from 'axios';

// Action Types
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE';
export const FETCH_WISHLIST_SUCCESS = 'FETCH_WISHLIST_SUCCESS';
export const FETCH_WISHLIST_FAILURE = 'FETCH_WISHLIST_FAILURE';
export const ADD_TO_WISHLIST_SUCCESS = 'ADD_TO_WISHLIST_SUCCESS';
export const ADD_TO_WISHLIST_FAILURE = 'ADD_TO_WISHLIST_FAILURE';
export const REMOVE_FROM_WISHLIST_SUCCESS = 'REMOVE_FROM_WISHLIST_SUCCESS';
export const REMOVE_FROM_WISHLIST_FAILURE = 'REMOVE_FROM_WISHLIST_FAILURE';

// API Endpoints
const BASE_URL = 'https://ecommerce.routemisr.com';

// Add Product to Cart
export const addToCartSuccess = (data) => ({
    type: ADD_TO_CART_SUCCESS,
    payload: data,
});

export const addToCartFailure = (error) => ({
    type: ADD_TO_CART_FAILURE,
    payload: error,
});

export const addToCart = (productId) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(
                `${BASE_URL}/api/v1/cart`,
                { productId },
                {
                    headers: {
                        token: localStorage.getItem('userToken'),
                    },
                }
            );

            dispatch(addToCartSuccess(response.data));

            return response.data;
        } catch (error) {
            dispatch(addToCartFailure(error.response?.data || 'Failed to add product to cart.'));
            throw error;
        }
    };
};

// Fetch Wishlist
export const fetchWishlistSuccess = (data) => ({
    type: FETCH_WISHLIST_SUCCESS,
    payload: data,
});

export const fetchWishlistFailure = (error) => ({
    type: FETCH_WISHLIST_FAILURE,
    payload: error,
});

export const fetchWishlist = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${BASE_URL}/wishlist`);
            dispatch(fetchWishlistSuccess(response.data));
            return response.data;
        } catch (error) {
            dispatch(fetchWishlistFailure(error.response?.data || 'Failed to fetch wishlist.'));
            throw error;
        }
    };
};

// Add Product to Wishlist
export const addToWishlistSuccess = (data) => ({
    type: ADD_TO_WISHLIST_SUCCESS,
    payload: data,
});

export const addToWishlistFailure = (error) => ({
    type: ADD_TO_WISHLIST_FAILURE,
    payload: error,
});

export const addToWishlist = (productId) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASE_URL}/wishlist/add`, { productId });
            dispatch(addToWishlistSuccess(response.data));
            return response.data;
        } catch (error) {
            dispatch(addToWishlistFailure(error.response?.data || 'Failed to add product to wishlist.'));
            throw error;
        }
    };
};

// Remove Product from Wishlist
export const removeFromWishlistSuccess = (data) => ({
    type: REMOVE_FROM_WISHLIST_SUCCESS,
    payload: data,
});

export const removeFromWishlistFailure = (error) => ({
    type: REMOVE_FROM_WISHLIST_FAILURE,
    payload: error,
});

export const removeFromWishlist = (productId) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${BASE_URL}/wishlist/remove/${productId}`);
            dispatch(removeFromWishlistSuccess(response.data));
            return response.data;
        } catch (error) {
            dispatch(removeFromWishlistFailure(error.response?.data || 'Failed to remove product from wishlist.'));
            throw error;
        }
    };
};
