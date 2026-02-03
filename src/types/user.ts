export type Role = 'tenant' | 'admin';

export type User = {
  id: string;
  role: Role;
  fullName: string;
  email: string;
  address: string;
  phone: string;
  password: string;
  profileImage: string;
};

export type UserLogin = Pick<User, 'email' | 'password'>;

export type UserSignup = Omit<User, 'id' | 'role' | 'profileImage'>;

export type UserInfo = Pick<
  User,
  'role' | 'fullName' | 'email' | 'address' | 'phone' | 'profileImage'
>;
