import http from "./http";

export const login = (credentials: { username: string; password: string }) =>
  http.post("/auth/login", credentials);

export const register = (obj: {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}) => http.post("/auth/register", obj);
