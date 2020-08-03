import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import usersService from '../../services/users';
import { LoginData, User } from '../../services/users';

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

export const login = createAsyncThunk(
  'login/login',
  async (loginData: LoginData) => {
    const response = await usersService.login(loginData);
    return response;
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled';
      state.currentUser = payload.user;
      state.accessToken = payload.accessToken;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, { error }) => {
      state.status = 'rejected';
      if (error.message) {
        state.error = error.message;
      }
    });
  },
});

export default loginSlice.reducer;
