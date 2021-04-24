import { FC, PropsWithChildren } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { PUBLIC_PAGES } from '../constants';
import { LogoImage } from './LogoImage';

export interface PublicMenuTopProps {
  header: string;
  activePage?: string;
}

export const PublicMenuTop: FC<PublicMenuTopProps> = (
  props: PropsWithChildren<PublicMenuTopProps>,
) => {
  const { header, activePage } = props;
  return (
    <div className='menu menu-public-top'>
      <Menu inverted borderless fixed='top'>
        <Menu.Item><LogoImage /></Menu.Item>
        <Menu.Item header>{header}</Menu.Item>
        <Menu.Item name='home' active={'home' === activePage} as={Link} to={PUBLIC_PAGES.home.link}>
          <Icon name='home' color='yellow' />
          {PUBLIC_PAGES.home.label}
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='signin' active={'signin' === activePage} as={Link} to={PUBLIC_PAGES.signin.link}>
            <Icon name='sign-in' color='yellow' />
            {PUBLIC_PAGES.signin.label}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
