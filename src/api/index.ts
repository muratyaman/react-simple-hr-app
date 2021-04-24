import axios from 'axios';
import { API_BASE_URL, API_KEY } from '../constants';
import { DepartmentModel, DepartmentCreateModel, EmployeeModel, EmployeeCreateModel, UserModel, UserRoleEnum } from '../types';
import { sleep } from '../utils';

let token: string | null = null;
const defaultHeaders = { 'x-api-key': API_KEY };
export const api = axios.create({ baseURL: API_BASE_URL, headers: defaultHeaders });

export interface ApiMetaList {
  total?: number;
}

export interface ApiResponse<TData = any, TMeta = any>{
  data: TData;
  meta: TMeta;
  error?: string | null;
}

// store actions once in memory, avoid using dynamic strings
const DEFAULT_URL = ''; // no sub-paths needed
export const ACTIONS = {
  auth: {
    signin: 'signin',
    signout: 'signout',
  },
  dept: {
    search: 'department_search',
    create: 'department_create',
  },
  emp: {
    search: 'employee_search',
    create: 'employee_create',
  },
  report: {
    dept_with_max_salary: 'report_department_with_max_salary',
    dept_with_emps_over_salary: 'report_department_with_employees_over_salary',
  },
};

async function _action<TData = any, TMeta = any>(action: string, data: any = {}): Promise<ApiResponse<TData, TMeta>> { // short-cut
  // TODO: append token to headers if not null
  const res = await api.post(DEFAULT_URL, { action, data });
  return Promise.resolve(res.data as ApiResponse<TData, TMeta>); // pretend to keep TS happy
}

export async function signin(username: string, password: string) {
  // TODO awaiting API implementation
  /*
  const data = {
    action: 'signin',
    data: { username, password },
  };
  const res = await _action(ACTIONS.auth.signin, { username, password });
  return res.data; // TODO: adapt body as user model
  */

  // pretend for now
  await sleep(3000);

  const user: UserModel = {
    username,
    role: UserRoleEnum.ADMIN,
  };

  token = 'abc12345...';

  return Promise.resolve({ user });
}

export async function signout(): Promise<boolean> {
  // TODO
  token = null;
  await sleep(3000);
  return true;
}

export async function departmentSearch(data: any = {}) {
  return _action<DepartmentModel[], ApiMetaList>(ACTIONS.dept.search, data);
}

export async function departmentCreate(data: DepartmentCreateModel) {
  return _action<boolean>(ACTIONS.dept.create, data);
}

export async function employeeSearch(data: any = {}) {
  return _action<EmployeeModel[], ApiMetaList>(ACTIONS.emp.search, data);
}

export async function employeeCreate(data: EmployeeCreateModel) {
  return _action<boolean>(ACTIONS.emp.create, data);
}

export interface ReportRowDeptWithMaxSalary extends DepartmentModel {
  max_emp_salary: number;
  emp_count: number;
}

export async function reportDeptWithMaxSalary(data: any = {}) {
  return _action<ReportRowDeptWithMaxSalary[]>(ACTIONS.report.dept_with_max_salary, data);
}

export async function reportDeptWithEmployeesOverSalary(employee_count = 2, salary_threshold: 50000) {
  return _action<ReportRowDeptWithMaxSalary[]>(ACTIONS.report.dept_with_emps_over_salary, { employee_count, salary_threshold });
}
