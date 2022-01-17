import { TablePage } from './pages/TablePage';
import { Charts } from './pages/Charts';

export const routes = [
  {
    path: '/',
    component: <TablePage />,
  },
  {
    path: '/charts',
    component: <Charts />,
  },
];
