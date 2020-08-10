import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import usersService from '../../services/users';
import { LoginData, User } from '../../services/users';
import { RootState } from '../../app/rootReducer';

interface Status {
  error: string | null;
  status: 'idle' | 'pending';
}

type LoginState = {
  currentUser: User | null;
  accessToken: string | null;
} & Status;

export const initialState: LoginState = {
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
    builder.addCase(login.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.status = 'idle';
      state.currentUser = payload.user;
      state.accessToken = payload.accessToken;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, { error }) => {
      state.status = 'idle';
      if (error.message) {
        state.error = error.message;
      }
    });
  },
});

export const selectAccessToken = (state: RootState) => state.login.accessToken;
export const selectCurrentUser = (state: RootState) => state.login.currentUser;
export const selectError = (state: RootState) => state.login.error;
export const selectStatus = (state: RootState) => state.login.status;

export default loginSlice.reducer;
