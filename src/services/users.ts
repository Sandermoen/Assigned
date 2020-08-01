import axios from 'axios';

import errorHandler from '../utils/errorHandler';

const usersInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/users`,
});

type Role = 'student' | 'teacher';

export interface User {
  fullName: string;
  lastName: string;
  email: string;
  role: Role;
  id: string;
}

export interface LoginResponse {
  user: User;
  accessToken: string;
}

export interface LoginData {
  email: string;
  password: string;
}

const login = async (loginData: LoginData): Promise<LoginResponse> => {
  const { email, password } = loginData;
  try {
    const response = await usersInstance.post<LoginResponse>('/login', {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    return errorHandler(err);
  }
};

export default {
  login,
};