import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-amber-50 transition-colors dark:bg-gray-900">
      <Header
        links={[
          { to: '/', label: 'Work' },
          { to: '/about', label: 'About' },
        ]}
      />
      <main className="z-0">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
