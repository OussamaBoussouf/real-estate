export type User = {
  id: string;
  role: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  profileImage: string;
};

export type UserLogin = Pick<User, 'email' | 'password'>;

export type UserSignup = Omit<User, 'id' | 'role' | 'profileImage'>;

export type UserInfo = Pick<User, 'role' | 'fullName' | 'email' | 'phone' | 'profileImage'>;