import { FC, PropsWithChildren } from 'react';
import { Menu } from 'semantic-ui-react';
import { LogoImage } from './LogoImage';

export interface ProtectedMenuBottomProps {
  header: string;
}

export const ProtectedMenuBottom: FC<ProtectedMenuBottomProps> = (
  props: PropsWithChildren<ProtectedMenuBottomProps>,
) => {
  const { header } = props;
  return (
    <div className='menu menu-protected-bottom'>
      <Menu borderless fixed='bottom'>
        <Menu.Item><LogoImage /></Menu.Item>
        <Menu.Item header>{header}</Menu.Item>
        <Menu.Item>&copy; 2021 Haci Yaman</Menu.Item>
      </Menu>
    </div>
  );
}
