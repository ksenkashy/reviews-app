import { takeLatest, put, call } from 'redux-saga/effects';
import * as types from './types';
import { fetchReviewsSuccess, fetchReviewsFailure } from './actions';

// Имитация API-запроса
const mockApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          platform: "Google",
          rating: 4,
          date: "2023-11-15T10:00:00Z",
          text: "Отличный сервис!",
        },
        {
          id: 2,
          platform: "Яндекс",
          rating: 3,
          date: "2023-11-14T09:00:00Z",
          text: "Хорошо, но есть недочеты.",
        },
        {
          id: 3,
          platform: "2ГИС",
          rating: 5,
          date: "2023-11-13T08:00:00Z",
          text: "Прекрасно!",
        },
      ]);
    }, 1000);
  });
};

function* fetchReviewsSaga() {
  try {
    const reviews = yield call(mockApi);
    yield put(fetchReviewsSuccess(reviews));
  } catch (error) {
    yield put(fetchReviewsFailure(error.message));
  }
}

export function* watchReviews() {
  yield takeLatest(types.FETCH_REVIEWS, fetchReviewsSaga);
} 