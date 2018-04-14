const BASE_URL = 'http://localhost:8080';

const headers = new Headers();
headers.append("Accept", "application/json");
headers.append("Accept-Encoding", "gzip, deflate");
headers.append("Content-Type", "application/plain");

export function get(url) {
  return fetch(`${BASE_URL}/${url}`, {
    headers,
    method: 'GET',
    mode: 'cors'
  }).then(response => response.json());
}

export function post(url) {
  return fetch(`${BASE_URL}/${url}`, {
    headers,
    method: 'GET',
    mode: 'cors'
  }).then(response => response.json());
}