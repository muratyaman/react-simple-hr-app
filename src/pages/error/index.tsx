import { FC, PropsWithChildren } from 'react';
import { PublicLayout } from '../../layouts/PublicLayout';
import './index.css';

export interface ErrorPageProps {
  message: string;
}

export const ErrorPage: FC<ErrorPageProps> = (props: PropsWithChildren<ErrorPageProps>) => {
  return (
    <PublicLayout title='Error'>
      <div className='page page-error'>
        {props.message}
      </div>
    </PublicLayout>
  );
}
