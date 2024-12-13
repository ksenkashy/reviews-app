import * as types from './types';

const initialState = {
  reviews: [],
  loading: false,
  error: null,
  filters: {
    platform: 'all',
    rating: { min: 1, max: 5 }
  },
  sort: {
    field: 'date',
    direction: 'desc'
  }
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REVIEWS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: action.payload
      };
    case types.FETCH_REVIEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case types.SET_PLATFORM_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          platform: action.payload
        }
      };
    case types.SET_RATING_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          rating: action.payload
        }
      };
    case types.SET_SORT_CONFIG:
      return {
        ...state,
        sort: action.payload
      };
    default:
      return state;
  }
}; 