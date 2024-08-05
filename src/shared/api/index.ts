import axios from 'axios';

/** Апи */
export const api = axios.create({ baseURL: 'https://opentdb.com/api.php' });
