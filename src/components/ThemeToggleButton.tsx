import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};
