import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import useAppStore from './store/appStore';

export default function App() {
  const theme = useAppStore((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
  }, [theme]);

  return <RouterProvider router={router} />;
}
