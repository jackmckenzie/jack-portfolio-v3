import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <main className="pb-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
