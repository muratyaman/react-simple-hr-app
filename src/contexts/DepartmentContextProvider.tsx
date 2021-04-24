import { FC, PropsWithChildren, useState } from 'react';
import { DepartmentContext } from './DepartmentContext';
import { departmentSearch } from '../api';
import { DepartmentModel } from '../types';

export interface DepartmentContextProviderProps {
  q?: string | null; // TODO: filter query?
}

export const DepartmentContextProvider: FC<DepartmentContextProviderProps> = (
  props: PropsWithChildren<DepartmentContextProviderProps>,
) => {
  const [departments, setDepartments] = useState<DepartmentModel[]>([]);
  const value = {
    departments,
    departmentSearch: async () => {
      // wrap api call
      const out = await departmentSearch();
      setDepartments(out.data);
      return out;
    },
  };
  return (
    <DepartmentContext.Provider value={value}>
      {props.children}
    </DepartmentContext.Provider>
  );
}
