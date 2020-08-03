import { AxiosError } from 'axios';

const errorHandler = (err: AxiosError): never => {
  throw new Error(
    err.response
      ? err.response.data.error
      : err.request
      ? err.request.statusText
      : err.message
  );
};

export default errorHandler;
