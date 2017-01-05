import {get} from '../../util/http/http';

export const QUOTE = 'QUOTE';

export default () =>
({
  type: QUOTE,
  payload: get('', {
    method: 'getQuote',
    key: 456653,
    format: 'json',
    lang: 'en',
  }).then(response => response.data),
});
