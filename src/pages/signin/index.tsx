import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { SignInForm } from '../../components';
import { PublicLayout } from '../../layouts/PublicLayout';
import { PROTECTED_PAGES } from '../../constants';
import './index.css';
import { UserContext } from '../../contexts/UserContext';

const STAGE_READY   = 'ready';
const STAGE_LOADING = 'loading';

export function SignInPage() {
  const history = useHistory();
  const { signin } = useContext(UserContext);
  const [stage, setStage] = useState(STAGE_READY);
  const [username, setUsername] = useState<string|null>(null);
  const [password, setPassword] = useState<string|null>(null);
  const onChange = (name: string, value: string) => {
    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  }
  const onSubmit = async () => {
    setStage(STAGE_LOADING);
    if (signin) {
      const output = await signin(username ?? '', password ?? '');
      console.log(output); // TODO check output
      setStage(STAGE_READY);
      history.push(PROTECTED_PAGES.admin.link);
    }
  }
  return (
    <PublicLayout title='Sign in' activePage='signin'>
      <div className='page page-signin'>
        <SignInForm loading={stage === STAGE_LOADING} onChange={onChange} onSubmit={onSubmit} />
      </div>
    </PublicLayout>
  );
}
