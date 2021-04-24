import { Switch, Route } from 'react-router-dom';
import { UserContextProvider, DepartmentContextProvider, EmployeeContextProvider } from './contexts';
import { AdminPage } from './pages/admin/AdminPage';
import { HomePage } from './pages/home';
import { SignInPage } from './pages/signin';

export function App() {
  return (
    <UserContextProvider>
      <DepartmentContextProvider>
        <EmployeeContextProvider>
          <Switch>
            <Route path='/admin'>
              <AdminPage />
            </Route>
            <Route path='/signin'>
              <SignInPage />
            </Route>
            <Route path='/'>
              <HomePage />
            </Route>
            <Route>
              <div>Page not found</div>
            </Route>
          </Switch>
        </EmployeeContextProvider>
      </DepartmentContextProvider>
    </UserContextProvider>
  );
}
