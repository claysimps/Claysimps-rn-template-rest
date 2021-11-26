import axios from 'axios';
import Config from 'react-native-config';

/** @Remarks - add base URL to .env file */
const baseURL = Config.BASE_URI;

export const axiosInstance = axios.create({ baseURL });

export const getApiEndpoints = () =>
  ({
    /** @Remarks - add endpoints here */
    GET_SOMETHING: (string: string) => `/some/end/point/${string}`,
  } as const);
