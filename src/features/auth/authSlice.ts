import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import usersService from '../../services/users';
import { LoginData, SignUpData, User } from '../../services/users';
import { RootState } from '../../app/rootReducer';

interface Status {
  error: string | null;
  status: 'idle' | 'pending';
}

type AuthState = {
  currentUser: User | null;
} & Status;

export const initialState: AuthState = {
  currentUser: null,
  error: null,
  status: 'idle',
};

export const login = createAsyncThunk(
  'auth/login',
  async (loginData: LoginData) => {
    const response = await usersService.login(loginData);
    localStorage.setItem('accessToken', response.accessToken);
    return response;
  }
);

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (signUpData: SignUpData) => {
    const response = await usersService.signUp(signUpData);
    localStorage.setItem('accessToken', response.accessToken);
    return response;
  }
);

export const authenticate = createAsyncThunk('auth/authenticate', async () => {
  const response = await usersService.authenticate();
  return response;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = initialState.error;
    },
  },
  // Might be able to DRY this up
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.status = 'idle';
      state.currentUser = payload.user;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, { error }) => {
      state.status = 'idle';
      if (error.message) {
        state.error = error.message;
      }
    });
    builder.addCase(signUp.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.status = 'idle';
      state.currentUser = payload.user;
      state.error = null;
    });
    builder.addCase(signUp.rejected, (state, { error }) => {
      state.status = 'idle';
      if (error.message) {
        state.error = error.message;
      }
    });
    builder.addCase(authenticate.pending, (state) => {
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(authenticate.fulfilled, (state, { payload }) => {
      state.status = 'idle';
      state.currentUser = payload;
      state.error = null;
    });
    builder.addCase(authenticate.rejected, (state) => {
      state.status = 'idle';
    });
  },
});

export const selectCurrentUser = (state: RootState) => state.auth.currentUser;
export const selectError = (state: RootState) => state.auth.error;
export const selectStatus = (state: RootState) => state.auth.status;

export const { clearError } = authSlice.actions;

export default authSlice.reducer;
