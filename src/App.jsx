import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <section className='app-general'>
      <header>This is header</header>
      <main>
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
