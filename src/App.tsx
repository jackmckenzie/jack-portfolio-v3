import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header
        links={[
          { to: '/', label: 'Work' },
          { to: '/about', label: 'About' },
        ]}
      />
      <main className="z-0">
        <Outlet />
      </main>
    </>
  );
}

export default App;
