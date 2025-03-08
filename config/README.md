# Renewly Subscription Tracker

![Email Notification](./path-to-your-image.png)

## 🚀 Project Overview

The **Renewly Subscription Tracker** is a backend-only Node.js application designed to manage and track user subscriptions, with automated email reminders using **Upstash QStash** and **Nodemailer**. It features secure authentication, role-based access, and real-time tracking of subscription statuses.

---

## 📌 Features

● **Secure Authentication**: Utilizes JWT-based authentication for secure user login and session management.

● **User Management**: Role-based access control with admin privileges.

● **Subscription Tracking**: Tracks subscription start date, end date, and status.

● **Automated Email Reminders**: Sends automated email reminders using **Nodemailer** and **Upstash QStash**.

● **Arcjet Middleware**: Handles secure and consistent workflow automation.

● **Error Handling**: Centralized error handling for consistent response formatting.

● **REST API**: Fully functional REST API for user, auth, and subscription management.

● **Swagger Documentation**: API endpoints documented using **Swagger**.

---

## 🛠️ Tech Stack

### **Backend**

● **Node.js** – Backend runtime for handling API requests.  
● **Express** – Web framework for building REST APIs.  
● **MongoDB** – NoSQL database for storing user and subscription data.  
● **Mongoose** – ODM for MongoDB schema and query handling.

### **Authentication**

● **JWT (JSON Web Tokens)** – For secure authentication and session management.  
● **bcrypt** – For hashing and storing secure passwords.

### **Email & Workflow**

● **Nodemailer** – For sending email notifications.  
● **Upstash QStash** – For managing scheduled tasks and retry handling.  
● **Arcjet** – For secure workflow automation.

### **Middleware**

● **Cookie Parser** – For handling cookies and sessions.  
● **Arcjet Middleware** – For handling secure workflow execution.

### **API Documentation**

● **Swagger** – For REST API endpoint documentation.

### **Development**

● **Nodemon** – For hot-reloading during development.  
● **ESLint** – For code linting and formatting.

---

## 📊 Data Flow

1. **User Authentication:** JWT-based authentication with session handling using secure cookies.
2. **Subscription Creation:** Admins can create, update, and delete subscriptions.
3. **Automated Reminders:** QStash schedules email reminders; Nodemailer sends them to users.
4. **Real-Time Tracking:** Subscription status updates are reflected in real-time.

---

## 📄 API Endpoints

### **Auth**

- `POST /api/v1/auth/register` – Register a new user.
- `POST /api/v1/auth/login` – Authenticate user and return JWT token.

### **Users**

- `GET /api/v1/users` – Get all users.
- `GET /api/v1/users/:id` – Get user by ID.

### **Subscriptions**

- `POST /api/v1/subscriptions` – Create a subscription.
- `GET /api/v1/subscriptions` – Get all subscriptions.
- `PUT /api/v1/subscriptions/:id` – Update a subscription.
- `DELETE /api/v1/subscriptions/:id` – Delete a subscription.

---

## ⭐ Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you'd like to improve the system.

---

## 📜 License

This project is licensed under the **MIT License**. Contributions and modifications are welcome.
