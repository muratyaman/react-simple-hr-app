import { Link } from 'react-router-dom';
import { Button, Container, Grid, Header, Image } from 'semantic-ui-react';
import { PublicLayout } from '../../layouts/PublicLayout';
import { randomImgSrc } from '../../utils';
import './index.css';

export function HomePage() {
  return (
    <PublicLayout title='Home' activePage='home'>
      <div className='page page-home'>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Container fluid>
                <Header as='h2'>Lorem ipsum dolor sit amet</Header>
                <p>Aliquam purus quam, porta id accumsan ut, sagittis a nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce eget sagittis justo. Maecenas vulputate, orci eget aliquam interdum, arcu enim tempus velit, et rutrum tortor purus euismod mi. Ut suscipit finibus nulla, et vehicula augue lacinia ut. Donec semper mauris sed orci eleifend aliquam. Donec ac pulvinar velit, quis aliquet nulla. Phasellus venenatis felis sapien. Sed fermentum in tellus eget aliquet. Donec et mollis dui.</p>
                <Button.Group>
                  <Button color='yellow' as={Link} to='/signin'>Sign In</Button>
                  <Button.Or />
                  <Button positive as={Link} to='/signup'>Sign Up</Button>
                </Button.Group>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Image fluid src={randomImgSrc('office')} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </PublicLayout>
  );
}
