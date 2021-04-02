import axios from "axios";

const BACKEND_URL = `https://6.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404
};

export const createAPI = (onUnauthorized, loginError) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();

      throw err;
    }

    if (response.status === HttpCode.BAD_REQUEST) {
      loginError();

      throw err;
    }

    if (response.status === HttpCode.NOT_FOUND) {
      throw response.status;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
