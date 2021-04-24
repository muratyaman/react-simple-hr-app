import { FC, PropsWithChildren, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { ProtectedMenuBottom, ProtectedMenuTop } from '../components';
import { APP_NAME } from '../constants';
import { UserContext } from '../contexts/UserContext';
import { ErrorPage } from '../pages/error';

export interface ProtectedLayoutProps {
  title: string;
  activePage?: string;
}

export const ProtectedLayout: FC<ProtectedLayoutProps> = (
  props: PropsWithChildren<ProtectedLayoutProps>,
) => {
  const { user } = useContext(UserContext);
  if (!user) return <ErrorPage message='Sign in to access admin pages' />; // with public layout
  const { title, activePage, children } = props;
  return (
    <div className='layout layout-protected'>
      <Helmet>
        <title>{`${title} - ${APP_NAME}`}</title>
      </Helmet>
      <header>
        <ProtectedMenuTop header={APP_NAME} activePage={activePage} />
      </header>
      <div className='content'>
        {children}
      </div>
      <footer>
        <ProtectedMenuBottom header={APP_NAME} />
      </footer>
    </div>
  );
}
