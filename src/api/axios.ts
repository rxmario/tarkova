import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { HTTPError } from './models/HTTPError';
import { debugPrint } from '../helpers/debugPrint';

export interface HTTPResponse<T> {
  status: number;
  data: T;
}

export const request = async <ResponseType>(options: AxiosRequestConfig) => {
  const getBaseUrl = () => {
    return 'https://tarkov-market.com/api/v1/';
  };

  const client = axios.create({
    baseURL: getBaseUrl(),
  });

  const onSuccess = (response: AxiosResponse) => {
    debugPrint('Request: ', response.request);
    debugPrint('Status: ', response.status);
    debugPrint('Headers: ', response.headers);
    debugPrint('Config: ', response.config);
    debugPrint('Data: ', response.data);

    const res: HTTPResponse<ResponseType> = {
      data: response.data,
      status: response.status,
    };

    return res;
  };

  const onError = (error: AxiosError) => {
    debugPrint('Request failed: ', error);

    if (error.response) {
      // This technically means that that the request was made but the server responded with
      // something different then 2xx
      debugPrint('Status: ', error.response.status);
      debugPrint('Data: ', error.response.data);
      debugPrint('Headers: ', error.response.headers);
    } else {
      // Something happened while setting up the request
      debugPrint('Error Msg: ', error.message);
    }

    if (error.response) {
      if (error.response.data) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(error.response.data as HTTPError);
      }
      const httpError: HTTPError = {
        detail: `${error.response.statusText}`,
        status: error.response.status,
        title: '',
        type: '',
      };

      return Promise.reject(httpError);
    }
    const httpError: HTTPError = {
      detail: `${error.message}`,
      status: -1,
      title: '',
      type: '',
    };

    return Promise.reject(httpError);
  };
  return client(options).then(onSuccess).catch(onError);
};
