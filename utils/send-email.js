import { emailTemplates } from "./email-template.js";
import dayjs from "dayjs";
import transporter, { accountEmail } from "../config/nodemailer.js";

export const sendReminderEmail = async ({ to, type, subscription }) => {
  console.log("📨 Function `sendReminderEmail` called!");

  if (!to || !type) {
    console.error("❌ Missing required parameters:", { to, type });
    throw new Error("Missing required parameters");
  }

  console.log("📩 Preparing email for:", to, "| Type:", type);

  const template = emailTemplates.find((t) => t.label === type);
  if (!template) {
    console.error("❌ Invalid email type:", type);
    throw new Error("Invalid email type");
  }

  const mailInfo = {
    userName: subscription.user.name,
    subscriptionName: subscription.name,
    renewalDate: dayjs(subscription.renewalDate).format("MMM D, YYYY"),
    planName: subscription.name,
    price: `${subscription.currency} ${subscription.price} (${subscription.frequency})`,
    paymentMethod: subscription.paymentMethod,
  };

  console.log("📩 Email Data:", mailInfo);

  const message = template.generateBody(mailInfo);
  const subject = template.generateSubject(mailInfo);

  const mailOptions = {
    from: accountEmail,
    to: to,
    subject: subject,
    html: message,
  };

  console.log("🚀 Sending email with Nodemailer...");

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Error sending email:", error);
      return;
    }
    console.log("✅ Email sent successfully:", info.response);
  });
};
