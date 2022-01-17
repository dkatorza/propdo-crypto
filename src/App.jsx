import { Route, Routes } from 'react-router-dom';
import { Header } from './cmps/Header';
import { routes } from './routes';

function App() {
  return (
    <section className='app-general'>
      <header>
        <Header />
      </header>
      <main className='main-wrapper'>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              element={route.component}
              path={route.path}
            />
          ))}
        </Routes>
      </main>
    </section>
  );
}

export default App;
