import { format } from 'date-fns';

export const sleep = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function randomImgSrc(keywords = '', w = 300, h = 300): string {
  return `https://source.unsplash.com/random/${w}x${h}?${keywords}`;
}

export function formatMoney(amount = 0, currency = 'GBP') {
  const formatter = new Intl.NumberFormat('en-GB', { style: 'currency', currency });
  return formatter.format(amount);
}

export function formatDob(dob: string | null = null): string {
  if (dob) return format(new Date(dob), 'dd/MM/yyyy');
  return '';
}
