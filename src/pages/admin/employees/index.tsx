import { useContext, useEffect, useState } from 'react';
import { Icon, Table } from 'semantic-ui-react';
import { EmployeeContext } from '../../../contexts';
import { ProtectedLayout } from '../../../layouts/ProtectedLayout';
import { formatMoney, formatDob } from '../../../utils';
import './index.css';

export function AdminEmployeesPage() {
  const { employees = [], employeeSearch } = useContext(EmployeeContext);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 0) {
      setCount(count + 1);
      if (employeeSearch) employeeSearch(); // trigger initial search
    }
  }, [count, employeeSearch]);
  return (
    <ProtectedLayout title='Employees' activePage='employees'>
      <div className='page page-admin-employees'>
        <p>
          You can manage your employees in this page.
        </p>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Employee</Table.HeaderCell>
              <Table.HeaderCell textAlign='right'>Salary</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Date of Birth</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {employees.map(({ id, first_name, last_name, salary,dob }) => (
              <Table.Row key={`emp-${id}`}>
                <Table.Cell width={10}><Icon name='pencil'/> {first_name} {last_name}</Table.Cell>
                <Table.Cell width={3} textAlign='right'>{formatMoney(salary)}</Table.Cell>
                <Table.Cell width={3} textAlign='center'>{formatDob(dob)}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </ProtectedLayout>
  );
}
