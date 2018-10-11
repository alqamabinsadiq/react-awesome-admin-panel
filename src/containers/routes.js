// import App from './App';
import Dashboard from './Dashboard/Dashboard';
import Table from './Table/Table';
// import UnitExplorer from '../Explorer/UnitExplorer';

// router configuration.
let routes = [
  {
    path: '/dashboard',
    name: 'Project Dashboard',
    component: Dashboard,
    exact: true,
    strict: true
  },
  {
    path: '/dashboard/table',
    name: 'Table',
    component: Table,
    exact: true,
    strict: true
  }
];

export default routes;