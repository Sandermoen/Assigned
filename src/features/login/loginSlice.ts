import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import usersService from '../../services/users';
import { LoginData, User, LoginResponse } from '../../services/users';

interface Status {
  error: string | null;
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
}

type LoginState = {
  currentUser: User | null;
  accessToken: string | null;
} & Status;

const initialState: LoginState = {
  currentUser: null,
  accessToken: null,
  error: null,
  status: 'idle',
};

export const login = createAsyncThunk<
  LoginResponse,
  LoginData,
  { rejectValue: Error }
>('login/login', async (loginData: LoginData) => {
  const response = await usersService.login(loginData);
  return response;
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled';
      state.currentUser = payload.user;
      state.accessToken = payload.accessToken;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.status = 'rejected';
      if (payload) {
        state.error = payload.message;
      }
    });
  },
});

export default loginSlice.reducer;
