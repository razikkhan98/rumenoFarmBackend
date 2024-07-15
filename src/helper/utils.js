import jwt from "jsonwebtoken";

export const getToken = (id, email, rememberMe, role = "user") => {
  const expiresIn = rememberMe ? "15 days" : "3 days";
  return jwt.sign({ id, email, role }, SECRET, { expiresIn });
};
