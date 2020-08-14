import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

export default () => {
  axios.interceptors.request.use((config) => {
    if (localStorage.accessToken) {
      config.headers = { Authorization: `Bearer ${localStorage.accessToken}` };
    }
    return config;
  });

  const refreshAuthLogic = (failedRequest: {
    response: {
      config: { headers: { [x: string]: string } };
      data: { error: string };
    };
  }) => {
    if (!failedRequest.response.data.error.includes('Invalid credentials')) {
      return axios
        .put(`${process.env.REACT_APP_API_URL}/users/refresh`)
        .then((tokenRefreshResponse) => {
          localStorage.setItem('accessToken', tokenRefreshResponse.data.token);
          failedRequest.response.config.headers['Authorization'] =
            'Bearer ' + tokenRefreshResponse.data.token;
          return Promise.resolve();
        });
    }
    return Promise.reject(new Error(failedRequest.response.data.error));
  };

  createAuthRefreshInterceptor(axios, refreshAuthLogic);
};
