import axios from 'axios';

import errorHandler from '../utils/errorHandler';

const baseURL = `${process.env.REACT_APP_API_URL}/users`;

type Role = 'student' | 'teacher';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  id: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}

export type SignUpData = Omit<User, 'id'>;

export interface LoginData {
  email: string;
  password: string;
}

const login = async (loginData: LoginData): Promise<AuthResponse> => {
  const { email, password } = loginData;
  try {
    const response = await axios.post<AuthResponse>(`${baseURL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    return errorHandler(err);
  }
};

const signUp = async (signUpData: SignUpData): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(`${baseURL}/signup`, {
      ...signUpData,
    });
    return response.data;
  } catch (err) {
    return errorHandler(err);
  }
};

const authenticate = async (): Promise<User> => {
  try {
    // Not including accessToken because we are already doing it
    // using an axios interceptor
    const response = await axios.get<User>(`${baseURL}/auth`);
    return response.data;
  } catch (err) {
    return errorHandler(err);
  }
};

export default {
  login,
  signUp,
  authenticate,
};
