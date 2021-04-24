import { FC, PropsWithChildren } from 'react';
import { Menu } from 'semantic-ui-react';
import { LogoImage } from './LogoImage';

export interface PublicMenuBottomProps {
  header: string;
}

export const PublicMenuBottom: FC<PublicMenuBottomProps> = (
  props: PropsWithChildren<PublicMenuBottomProps>,
) => {
  const { header } = props;
  return (
    <div className='menu menu-public-bottom'>
      <Menu borderless fixed='bottom'>
        <Menu.Item><LogoImage /></Menu.Item>
        <Menu.Item header>{header}</Menu.Item>
        <Menu.Item>&copy; 2021 Haci Yaman</Menu.Item>
      </Menu>
    </div>
  );
}
