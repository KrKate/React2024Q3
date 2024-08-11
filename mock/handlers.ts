import { http, HttpResponse } from 'msw';
import data from './products.json';

export const handlers = [
  http.get('https://dummyjson.com/products?limit=10&skip=10', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(data);
  }),
];
export default handlers;
