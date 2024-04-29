import { http, HttpResponse } from 'msw';
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('/posts', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
      { "type": "bankdraft", "title": "Bank Draft", "position": 0}, 
      { "type": "bill-of-lading", "title": "Bill of Lading", "position": 1 }, 
      {"type": "invoice", "title":"Invoice", "position": 2}, 
      {"type": "bank-draft-2", "title": "Bank Draft 2", "position": 3}, 
      {"type":"bill-of-lading-2", "title": "Bill of Lading 2", "position": 4}] 
  )}),
]