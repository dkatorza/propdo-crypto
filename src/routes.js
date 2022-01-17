import { TablePage } from './pages/TablePage';
import { ChartPage } from './pages/ChartPage';

export const routes = [
  {
    path: '/',
    component: <TablePage />,
  },
  {
    path: '/chartpage',
    component: <ChartPage />,
  },
];
