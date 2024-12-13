import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlatformFilter, setRatingFilter, setSortConfig } from '../store/actions';
import { selectFilters, selectSort } from '../store/selectors';

export const FilterPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const sort = useSelector(selectSort);

  return (
    <div className="filter-panel">
      <div>
        <h4>Платформа:</h4>
        <select 
          value={filters.platform}
          onChange={(e) => dispatch(setPlatformFilter(e.target.value))}
        >
          <option value="all">Все</option>
          <option value="Google">Google</option>
          <option value="Яндекс">Яндекс</option>
          <option value="2ГИС">2ГИС</option>
        </select>
      </div>

      <div>
        <h4>Рейтинг:</h4>
        <input
          type="number"
          min="1"
          max="5"
          value={filters.rating.min}
          onChange={(e) => dispatch(setRatingFilter(
            parseInt(e.target.value),
            filters.rating.max
          ))}
        />
        <span> - </span>
        <input
          type="number"
          min="1"
          max="5"
          value={filters.rating.max}
          onChange={(e) => dispatch(setRatingFilter(
            filters.rating.min,
            parseInt(e.target.value)
          ))}
        />
      </div>

      <div>
        <h4>Сортировка:</h4>
        <select
          value={sort.field}
          onChange={(e) => dispatch(setSortConfig(e.target.value, sort.direction))}
        >
          <option value="date">По дате</option>
          <option value="rating">По рейтингу</option>
        </select>
        <select
          value={sort.direction}
          onChange={(e) => dispatch(setSortConfig(sort.field, e.target.value))}
        >
          <option value="desc">По убыванию</option>
          <option value="asc">По возрастанию</option>
        </select>
      </div>
    </div>
  );
}; 