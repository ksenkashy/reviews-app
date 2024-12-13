import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FilterPanel } from './components/FilterPanel';
import { ReviewsTable } from './components/ReviewsTable';
import { fetchReviews } from './store/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Отзывы</h1>
      <FilterPanel />
      <ReviewsTable />
    </div>
  );
}

export default App; 