import { FC, PropsWithChildren } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

export interface SignInFormProps {
  loading: boolean;
  onChange: (name: string, value: string) => void;
  onSubmit: () => void;
}

export const SignInForm: FC<SignInFormProps> = (
  props: PropsWithChildren<SignInFormProps>,
) => (
  <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='./logo.png' /> Sign in to your account
      </Header>
      <Form size='large' onSubmit={props.onSubmit} loading={props.loading}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
            onChange={(e, { name, value }) => props.onChange(name, value)}
          />
          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'
            onChange={(e, { name, value }) => props.onChange(name, value)}
          />
          <Button color='teal' fluid size='large' type='submit'>
            Sign In
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#signup'>Sign Up (TODO)</a>
      </Message>
    </Grid.Column>
  </Grid>
);
