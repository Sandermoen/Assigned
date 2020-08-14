import loginReducer, {
  initialState,
  login,
  selectCurrentUser,
  selectError,
  selectStatus,
} from '../authSlice';

describe('loginSlice', () => {
  describe('reducer, actions and selectors', () => {
    test('Should return initial state when nothing is passed', () => {
      const result = loginReducer(undefined, { type: 'test' });
      expect(result).toEqual(initialState);
    });

    test('Should handle pending state when login request is made', () => {
      const result = loginReducer(initialState, { type: login.pending.type });
      const rootState = { auth: result };
      expect(selectStatus(rootState)).toBe('pending');
      expect(selectCurrentUser(rootState)).toBe(null);
      expect(selectError(rootState)).toBe(null);
    });

    test('Should handle login state upon successfull login', () => {
      const payload = {
        accessToken: 'token',
        user: {
          firstName: 'John',
          lastName: 'Marston',
          email: 'johnmarston@gmail.com',
          role: 'student',
        },
      };

      const nextState = loginReducer(initialState, {
        type: login.fulfilled,
        payload,
      });

      const rootState = { auth: nextState };
      expect(selectError(rootState)).toBe(null);
      expect(selectStatus(rootState)).toBe('idle');
      expect(selectCurrentUser(rootState)).toEqual(payload.user);
    });

    test('Should handle login state upon unsuccessful login', () => {
      const error = {
        message: 'Invalid credentials',
      };

      const nextState = loginReducer(initialState, {
        type: login.rejected,
        error,
      });

      const rootState = { auth: nextState };
      expect(selectError(rootState)).toBe(error.message);
      expect(selectStatus(rootState)).toBe('idle');
      expect(selectCurrentUser(rootState)).toBe(null);
    });
  });
});
