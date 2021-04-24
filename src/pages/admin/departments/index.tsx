import { useContext, useEffect, useState } from 'react';
import { Icon, Table } from 'semantic-ui-react';
import { DepartmentContext } from '../../../contexts';
import { ProtectedLayout } from '../../../layouts/ProtectedLayout';
import './index.css';

export function AdminDepartmentsPage() {
  const { departments = [], departmentSearch } = useContext(DepartmentContext);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 0) {
      setCount(count + 1);
      if (departmentSearch) departmentSearch(); // trigger initial search
    }
  }, [count, departmentSearch]);
  return (
    <ProtectedLayout title='Departments' activePage='departments'>
      <div className='page page-admin-departments'>
        <p>
          You can manage your departments in this page.
        </p>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Department</Table.HeaderCell>
              <Table.HeaderCell>ID</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {departments.map(({ id, name }) => (
              <Table.Row key={`dept-${id}`}>
                <Table.Cell width={13}><Icon name='pencil'/> {name}</Table.Cell>
                <Table.Cell width={3}>{id}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </ProtectedLayout>
  );
}
