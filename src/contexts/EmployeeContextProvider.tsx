import { FC, PropsWithChildren, useState } from 'react';
import { EmployeeContext } from './EmployeeContext';
import { employeeSearch } from '../api';
import { EmployeeModel } from '../types';

export interface EmployeeContextProviderProps {
  q?: string | null; // TODO: filter query?
}

export const EmployeeContextProvider: FC<EmployeeContextProviderProps> = (
  props: PropsWithChildren<EmployeeContextProviderProps>,
) => {
  const [employees, setEmployees] = useState<EmployeeModel[]>([]);
  const value = {
    employees,
    employeeSearch: async () => {
      // wrap api call
      const out = await employeeSearch();
      setEmployees(out.data);
      return out;
    },
  };
  return (
    <EmployeeContext.Provider value={value}>
      {props.children}
    </EmployeeContext.Provider>
  );
}
