import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ARCJET_KEY } from "./env.js";

export const aj = arcjet({
  key: ARCJET_KEY,

  characteristics: ["ip.src"],

  rules: [
    shield({ mode: "LIVE" }),

    detectBot({
      mode: "LIVE",

      allow: ["CATEGORY:SEARCH_ENGINE", "CATEGORY:MONITOR", "CATEGORY:PREVIEW"],
    }),

    tokenBucket({
      mode: "LIVE",

      refillRate: 5,

      interval: 10,

      capacity: 10,
    }),
  ],
});
