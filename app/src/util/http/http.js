import axios from 'axios';
import {AXIOS_CONFIG} from './constants';

// helper
const http = () => axios.create(AXIOS_CONFIG);

// verbs
export const get = (url, params) =>
  http().get(url, {params});

export const post = (url, data) =>
  http().post(url, data);

export const put = (url, data) =>
  http().put(url, data);

export const httpDelete = (url, params) =>
  http().delete(url, {params});
