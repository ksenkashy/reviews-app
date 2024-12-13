export const selectReviews = (state) => state.reviews;
export const selectFilters = (state) => state.filters;
export const selectSort = (state) => state.sort;

export const selectFilteredAndSortedReviews = (state) => {
  const reviews = selectReviews(state);
  const filters = selectFilters(state);
  const sort = selectSort(state);

  let result = [...reviews];

  // Применяем фильтры
  if (filters.platform !== 'all') {
    result = result.filter(review => review.platform === filters.platform);
  }
  
  result = result.filter(review => 
    review.rating >= filters.rating.min && 
    review.rating <= filters.rating.max
  );

  // Применяем сортировку
  result.sort((a, b) => {
    const factor = sort.direction === 'asc' ? 1 : -1;
    if (sort.field === 'date') {
      return factor * (new Date(a.date) - new Date(b.date));
    }
    return factor * (a[sort.field] - b[sort.field]);
  });

  return result;
}; 