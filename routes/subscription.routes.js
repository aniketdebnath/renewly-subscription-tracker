import { Router } from "express";
import { authorize } from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getAllSubscriptions,
  getSubscriptionById,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";
import { isAdmin } from "../middlewares/admin.middleware.js";
const subscriptionRouter = Router();

subscriptionRouter.get("/", authorize, isAdmin, getAllSubscriptions);
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.get("/:id", authorize, getSubscriptionById);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "UPDATE subscription" })
);

subscriptionRouter.delete("/", (req, res) =>
  res.send({ title: "DELETE subscriptions" })
);

// subscriptionRouter.put("/:id/cancel", (req, res) =>
//   res.send({ title: "CANCEL subscriptions" })
// );

// subscriptionRouter.get("/upcoming-renewals", (req, res) =>
//   res.send({ title: "GET upcoming renewals" })
// );

export default subscriptionRouter;
