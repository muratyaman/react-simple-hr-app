import React from 'react';
import { employeeCreate, employeeSearch } from '../api';
import { EmployeeModel } from '../types';

export interface EmployeeContextModel {
  employees?: EmployeeModel[];
  employeeSearch: typeof employeeSearch;
  employeeCreate?: typeof employeeCreate;
}

export const EmployeeContext = React.createContext<Partial<EmployeeContextModel>>({});
