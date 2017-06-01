export const LOGIN_STATUS = "LOGIN_STATUS";

export function loginStatus(status) {
  return {type: LOGIN_STATUS, status};
}