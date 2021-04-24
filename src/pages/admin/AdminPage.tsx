import { Switch, Route } from 'react-router-dom';
import { AdminDepartmentsPage } from './departments';
import { AdminEmployeesPage } from './employees';
import { AdminSignOutPage } from './signout';
import { AdminHomePage } from './home';

export function AdminPage() {
  return (
    <Switch>
      <Route path='/admin/departments'>
        <AdminDepartmentsPage />
      </Route>
      <Route path='/admin/employees'>
        <AdminEmployeesPage />
      </Route>
      <Route path='/admin/signout'>
        <AdminSignOutPage />
      </Route>
      <Route path='/admin'>
        <AdminHomePage />
      </Route>
      <Route>
        <div>Page not found</div>
      </Route>
    </Switch>
  );
}
