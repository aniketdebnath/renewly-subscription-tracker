import { ADMIN_ID } from "../config/env.js";

export const isAdmin = (req, res, next) => {
  if (!req.user || req.user._id.toString() !== ADMIN_ID) {
    return res.status(403).json({ message: "Access denied. Admins only" });
  }
  next();
};
// In the isAdmin middleware, we check if the user is an admin by comparing the user's _id with the ADMIN_ID from the environment variables. If the user is not an admin, we return a 403 status code with a message "Access denied. Admins only". Otherwise, we call the next middleware in the stack.
