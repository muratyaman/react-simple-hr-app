// read env settings; also keep TS happy
export const APP_NAME: string     = process.env.REACT_APP_APP_NAME ?? '';
export const APP_VERSION: string  = process.env.REACT_APP_APP_VERSION ?? '';
export const API_BASE_URL: string = process.env.REACT_APP_API_BASE_URL ?? '';
export const API_KEY: string      = process.env.REACT_APP_API_KEY ?? '';

export const PUBLIC_PAGES = {
  home: {
    link: '/',
    label: 'Home',
  },
  signin: {
    link: '/signin',
    label: 'Sign in',
  },
}

export const PROTECTED_PAGES = {
  admin: {
    link: '/admin',
    label: 'Home',
  },
  departments: {
    link: '/admin/departments',
    label: 'Departments',
  },
  employees: {
    link: '/admin/employees',
    label: 'Employees',
  },
  signout: {
    link: '/admin/signout',
    label: 'Sign out',
  },
};
