import { FC, PropsWithChildren } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { PROTECTED_PAGES } from '../constants';
import { LogoImage } from './LogoImage';

export interface ProtectedMenuTopProps {
  header: string;
  activePage?: string;
}

export const ProtectedMenuTop: FC<ProtectedMenuTopProps> = (
  props: PropsWithChildren<ProtectedMenuTopProps>,
) => {
  const { header, activePage } = props;
  return (
    <div className='menu menu-protected-top'>
      <Menu inverted borderless fixed='top'>
        <Menu.Item><LogoImage /></Menu.Item>
        <Menu.Item header>{header}</Menu.Item>
        <Menu.Item name='home' active={'home' === activePage} as={Link} to={PROTECTED_PAGES.admin.link}>
          <Icon name='home' color='yellow' />
          {PROTECTED_PAGES.admin.label}
        </Menu.Item>
        <Menu.Item name='departments' active={'departments' === activePage} as={Link} to={PROTECTED_PAGES.departments.link}>
          <Icon name='building' color='green' />
          {PROTECTED_PAGES.departments.label}
        </Menu.Item>
        <Menu.Item name='employees' active={'employees' === activePage} as={Link} to={PROTECTED_PAGES.employees.link}>
          <Icon name='users' color='teal' />
          {PROTECTED_PAGES.employees.label}
        </Menu.Item>
        
        <Menu.Menu position='right'>
          <Menu.Item name='signout' active={'signout' === activePage} as={Link} to={PROTECTED_PAGES.signout.link}>
            <Icon name='sign-out' color='red' />
            {PROTECTED_PAGES.signout.label}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
