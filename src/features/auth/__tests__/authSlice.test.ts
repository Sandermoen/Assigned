import authReducer, {
  initialState,
  login,
  authenticate,
  selectCurrentUser,
  selectError,
  selectStatus,
  clearError,
} from '../authSlice';

describe('authSlice', () => {
  describe('reducer, actions and selectors', () => {
    const payload = {
      firstName: 'John',
      lastName: 'Marston',
      email: 'johnmarston@gmail.com',
      role: 'student',
    };
    test('Should return initial state when nothing is passed', () => {
      const nextState = authReducer(undefined, { type: 'test' });
      expect(nextState).toEqual(initialState);
    });

    test('Should handle pending state when login request is made', () => {
      const nextState = authReducer(initialState, {
        type: login.pending.type,
      });
      const rootState = { auth: nextState };
      expect(selectStatus(rootState)).toBe('pending');
      expect(selectCurrentUser(rootState)).toBe(null);
      expect(selectError(rootState)).toBe(null);
    });

    test('Should handle auth state upon successfull login', () => {
      const nextState = authReducer(initialState, {
        type: login.fulfilled,
        payload: { user: payload },
      });

      const rootState = { auth: nextState };
      expect(selectError(rootState)).toBe(null);
      expect(selectStatus(rootState)).toBe('idle');
      expect(selectCurrentUser(rootState)).toEqual(payload);
    });

    test('Should handle auth state upon unsuccessful login', () => {
      const error = {
        message: 'Invalid credentials',
      };

      const nextState = authReducer(initialState, {
        type: login.rejected,
        error,
      });

      const rootState = { auth: nextState };
      expect(selectError(rootState)).toBe(error.message);
      expect(selectStatus(rootState)).toBe('idle');
      expect(selectCurrentUser(rootState)).toBeNull();
    });

    test('Should handle auth state upon pending authentication', () => {
      const nextState = authReducer(initialState, {
        type: authenticate.pending,
      });
      const rootState = {
        auth: nextState,
      };
      expect(selectError(rootState)).toBeNull();
      expect(selectStatus(rootState)).toBe('pending');
    });

    test('Should handle auth state upon successful authentication', () => {
      const nextState = authReducer(initialState, {
        type: authenticate.fulfilled,
        payload,
      });
      const rootState = {
        auth: nextState,
      };
      expect(selectError(rootState)).toBeNull();
      expect(selectStatus(rootState)).toBe('idle');
      expect(selectCurrentUser(rootState)).toEqual(payload);
    });

    test('Should handle auth state upon unsuccessful authentication and fail silently', () => {
      const nextState = authReducer(initialState, {
        type: authenticate.rejected,
      });
      const rootState = {
        auth: nextState,
      };
      expect(selectError(rootState)).toBeNull();
      expect(selectCurrentUser(rootState)).toBeNull();
      expect(selectStatus(rootState)).toBe('idle');
    });

    test('Should handle clearing an error', () => {
      const nextState = authReducer(
        { ...initialState, error: 'Test error' },
        { type: clearError.type }
      );
      const rootState = {
        auth: nextState,
      };
      expect(selectError(rootState)).toBeNull();
    });
  });
});
