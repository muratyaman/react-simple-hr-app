import React from 'react';
import { departmentCreate, departmentSearch } from '../api';
import { DepartmentModel } from '../types';

export interface DepartmentContextModel {
  departments?: DepartmentModel[];
  departmentSearch: typeof departmentSearch;
  departmentCreate?: typeof departmentCreate;
}

export const DepartmentContext = React.createContext<Partial<DepartmentContextModel>>({});
