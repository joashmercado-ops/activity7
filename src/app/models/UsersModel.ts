export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  role?: 'Student' | 'Admin';
  status: number; // 1 = active, 0 = inactive
  address?: string;
}
