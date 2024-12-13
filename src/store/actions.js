import * as types from './types';

export const fetchReviews = () => ({
  type: types.FETCH_REVIEWS
});

export const fetchReviewsSuccess = (reviews) => ({
  type: types.FETCH_REVIEWS_SUCCESS,
  payload: reviews
});

export const fetchReviewsFailure = (error) => ({
  type: types.FETCH_REVIEWS_FAILURE,
  payload: error
});

export const setPlatformFilter = (platform) => ({
  type: types.SET_PLATFORM_FILTER,
  payload: platform
});

export const setRatingFilter = (min, max) => ({
  type: types.SET_RATING_FILTER,
  payload: { min, max }
});

export const setSortConfig = (field, direction) => ({
  type: types.SET_SORT_CONFIG,
  payload: { field, direction }
}); 