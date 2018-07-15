export default function getBaseUrl() {
  return process.env.NODE_ENV === "production" ? 'https://ohs-backend.herokuapp.com' : 'http://localhost:1337';
}
