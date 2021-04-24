export interface UserModel {
  username: string;
  role: UserRoleEnum;
}

export enum UserRoleEnum {
  ADMIN,
  EMPLOYEE,
}

export interface DepartmentModel {
  id: number;
  name: string;
}

export type DepartmentCreateModel = Pick<DepartmentModel, 'id' | 'name'>;
export type DepartmentUpdateModel = Pick<DepartmentModel, 'name'>;

export interface EmployeeModel {
  id: string; // uuid
  first_name: string;
  last_name: string;
  dept_id: number;
  salary: number;
  dob?: string;
  created_at: string;
  updated_at: string;
}

export type EmployeeCreateModel = Pick<EmployeeModel, 'id' | 'first_name' | 'last_name' | 'dept_id' | 'salary' | 'dob'>;
export type EmployeeUpdateModel = Pick<EmployeeModel, 'first_name' | 'last_name' | 'dept_id' | 'salary' | 'dob'>;
