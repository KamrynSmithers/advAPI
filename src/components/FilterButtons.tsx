import { useFilter } from '../contexts/FilterContext';

export const FilterButtons = () => {
  const { setFilter } = useFilter();

  return (
    <>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
    </>
  );
};
