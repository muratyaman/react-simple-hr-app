import { Container, Grid, Header, Image } from 'semantic-ui-react';
import { ProtectedLayout } from '../../../layouts/ProtectedLayout';
import { randomImgSrc } from '../../../utils';
import './index.css';

export function AdminHomePage() {
  return (
    <ProtectedLayout title='Home' activePage='home'>
      <div className='page page-admin-home'>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Container fluid>
                <Header as='h2'>Lorem ipsum dolor sit amet</Header>
                <p>Cras et ipsum nulla. Pellentesque semper blandit dui, a aliquam libero hendrerit consequat. Etiam nec risus pretium, tempor augue et, interdum ex. Duis nibh sapien, sollicitudin sed porta id, dictum a odio. Sed eget sapien egestas, scelerisque velit eu, elementum ante. Nunc ac mi pretium, fermentum dui vitae, tincidunt lectus. Etiam urna justo, suscipit ut ultricies luctus, volutpat scelerisque ipsum.</p>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Image fluid src={randomImgSrc('office')} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </ProtectedLayout>
  );
}
