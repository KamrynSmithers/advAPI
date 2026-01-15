import { createContext, useContext, useState } from 'react';

type Filter = 'all' | 'active' | 'completed';

const FilterContext = createContext<{
  filter: Filter;
  setFilter: (f: Filter) => void;
} | null>(null);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<Filter>('all');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext)!;
