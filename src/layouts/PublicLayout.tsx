import { FC, PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';
import { PublicMenuBottom, PublicMenuTop } from '../components';
import { APP_NAME } from '../constants';

export interface PublicLayoutProps {
  title: string;
  activePage?: string;
}

export const PublicLayout: FC<PublicLayoutProps> = (
  props: PropsWithChildren<PublicLayoutProps>,
) => {
  const { title, activePage, children } = props;
  return (
    <div className='layout layout-public'>
      <Helmet>
        <title>{`${title} - ${APP_NAME}`}</title>
      </Helmet>
      <header>
        <PublicMenuTop header={APP_NAME} activePage={activePage} />
      </header>
      <div className='content'>
        {children}
      </div>
      <footer>
        <PublicMenuBottom header={APP_NAME} />
      </footer>
    </div>
  );
}
