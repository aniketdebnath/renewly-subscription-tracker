import { SERVER_URL } from "../config/env.js";
import { workflowClient } from "../config/upstash.js";
import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    const { workflowRunId } = await workflowClient.trigger({
      url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
      body: {
        subscriptionId: subscription.id,
      },
      headers: {
        "content-type": "application/json",
      },
      retries: 0,
    });

    res
      .status(201)
      .json({ success: true, data: { subscription, workflowRunId } });
  } catch (e) {
    next(e);
  }
};

export const getUserSubscriptions = async (req, res, next) => {
  try {
    // Check if the user is the same as the one in the token
    if (req.user._id.toString() !== req.params.id) {
      const error = new Error("You are not the owner of this account");
      error.status = 401;
      throw error;
    }

    const subscriptions = await Subscription.find({ user: req.params.id });

    res.status(200).json({ success: true, data: subscriptions });
  } catch (e) {
    next(e);
  }
};

// Get all subscriptions (Admin only)
export const getAllSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find().populate(
      "user",
      "name email"
    );
    res.status(200).json({ success: true, data: subscriptions });
  } catch (error) {
    next(error);
  }
};

// Get details of a single subscription (Only the owner or Admin)
export const getSubscriptionById = async (req, res, next) => {
  try {
    const subscription = await Subscription.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    //Only the subscription owner or an admin can access it
    if (
      req.user._id.toString() !== subscription.user.id.toString() &&
      !req.user.isAdmin
    ) {
      console.log(req.user._id.toString());
      console.log(subscription.user.toString());
      return res.status(403).json({
        message: "Access denied. You are not the owner of this subscription.",
      });
    }

    res.status(200).json({ success: true, data: subscription });
  } catch (error) {
    next(error);
  }
};
