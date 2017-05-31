export default function getBaseUrl() {
  return process.env.NODE_ENV === "production" ? 'https://midnight-prophet-api.herokuapp.com' : 'http://localhost:3030';
}
