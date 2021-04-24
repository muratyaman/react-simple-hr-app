import { useEffect, useState } from 'react';
import { Icon } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import { signout } from '../../../api';
import { PublicLayout } from '../../../layouts/PublicLayout';
import { PUBLIC_PAGES } from '../../../constants';
import './index.css';

const STAGE_WIP   = 'wip';
const STAGE_READY = 'ready';

export function AdminSignOutPage() {
  const [stage, setStage] = useState(STAGE_WIP);

  useEffect(() => {
    const startSignOut = async () => {
      await signout(); // wrap api call
      setStage(STAGE_READY);
    }
    startSignOut();
  }, []);

  return (
    <PublicLayout title='Sign out' activePage='signout'>
      <div className='page page-signout'>
        {stage === STAGE_WIP ? (
          <p><span>Signing out ... </span><Icon loading name='spinner' /></p>
        ) : (
          <Redirect to={PUBLIC_PAGES.home.link} />
        )}
      </div>
    </PublicLayout>
  );
}
