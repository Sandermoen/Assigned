import axios from 'axios';

import errorHandler from '../utils/errorHandler';

const usersInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/users`,
});

interface User {
  user: {
    fullName: string;
    lastName: string;
    email: string;
    role: 'student' | 'teacher';
    id: string;
  };
  accessToken: string;
}

const login = async (
  email: string,
  password: string
): Promise<User | Error> => {
  try {
    const response = await usersInstance.post<User>('/login', {
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
