# Project Documentation

## About the Project

This project is a comprehensive web application designed to manage bookings and providers. It includes both a backend and a frontend, providing a full-stack solution for handling user registrations, bookings, provider management, and email notifications.

### Features

- **User Authentication**: Register, login, logout, and password reset functionalities.
- **Booking Management**: Create, update, delete, and view bookings.
- **Provider Management**: Register, update, delete, and view providers.
- **Email Notifications**: Send email notifications for various actions.
- **Responsive Frontend**: Built with React and Vite, styled with Tailwind CSS.
- **File Uploads**: Handle file uploads using Multer and Cloudinary.

### Tech Stacks

- **React Js**
- **Tailwind CSS**
- **Material UI**
- **Cloudinary**
- **Responsive**
- **Nodemailer**
- **Node JS**
- **Express Js**
- **MongoDb**
- **Multer**
- **Dotenv**

## Table of Contents

1. Backend
    - Environment Variables
    - App Initialization
    - Configuration
    - Controllers
    - Middlewares
    - Models
    - Routes
    - Endpoints
2. Frontend
    - Project Setup
    - Configuration
    - Components
    - Pages
    - Assets

## Backend

### App Initialization

The main application is initialized in [`backend/app.js`](backend/app.js). It sets up middleware, static file serving, and routes.

### Configuration

- [`backend/config/connection.js`](backend/config/connection.js): Handles database connection.
- `backend/config/constant.js`: Defines constants used across the application.

### Controllers

Controllers handle the business logic for various routes:

- [`backend/controllers/booking.controllers.js`](backend/controllers/booking.controllers.js): Manages booking-related operations.
- [`backend/controllers/provider.controller.js`](backend/controllers/provider.controller.js): Manages provider-related operations.
- [`backend/controllers/email.controller.js`](backend/controllers/email.controller.js): Handles email sending operations.

### Middlewares

- [`backend/middlewares/multer.middleware.js`](backend/middlewares/multer.middleware.js): Configures `multer` for file uploads.

### Models

- [`backend/models/booking.model.js`](backend/models/booking.model.js): Defines the `Booking` schema.
- [`backend/models/provider.model.js`](backend/models/provider.model.js): Defines the `Provider` schema.
- [`backend/models/rating.model.js`](backend/models/rating.model.js): Defines the `Rating` schema.

### Routes

Routes are defined in [`backend/routes/user.route.js`](backend/routes/user.route.js) and handle various endpoints for user, booking, and provider operations.

### Endpoints

#### User Routes

- `POST /api/user/register`: Registers a new user with an avatar.
- `POST /api/user/login`: Logs in a user and returns a token.
- `GET /api/user/logout/:email`: Logs out a user by email.
- `GET /api/user/show-profile/:email`: Retrieves user profile information by email.
- `PATCH /api/user/update-profile/:email`: Updates user profile information by email with an avatar.
- `POST /api/user/new-booking`: Creates a new booking.
- `GET /api/user/all-booking/:email`: Retrieves all bookings for a user by email.
- `PATCH /api/user/rating`: Rates a provider.
- `GET /api/user/show-booking/:work`: Retrieves bookings by work type.

#### Provider Routes

- `POST /api/provider/provider-details/:email`: Registers a new provider by email.
- `GET /api/provider/provider-all-appointment/:email`: Retrieves all appointments for a provider by email.
- `GET /api/provider/provider-profile/:email`: Retrieves provider profile information by email.
- `PATCH /api/provider/provider-update-profile/:email`: Updates provider profile information by email with an avatar.
- `PATCH /api/provider/is-available/:email`: Updates provider availability status by email.
- `PATCH /api/provider/change-status`: Changes the status of a booking.
- `GET /api/provider/provider-review/:email`: Retrieves reviews for a provider by email.

#### Email Routes

- `POST /api/email/send-email`: Sends an email.

## Frontend

### Project Setup

The frontend is built with React and Vite. Key setup files include:

- [`frontend/package.json`](frontend/package.json): Defines project dependencies and scripts.
- [`frontend/vite.config.js`](frontend/vite.config.js): Vite configuration file.

### Configuration

- [`frontend/tailwind.config.js`](frontend/tailwind.config.js): Tailwind CSS configuration.
- [`frontend/postcss.config.js`](frontend/postcss.config.js): PostCSS configuration.
- [`frontend/eslint.config.js`](frontend/eslint.config.js): ESLint configuration.

### Components

Reusable components are located in the [`frontend/src/component`](frontend/src/component) directory:

- `Booking.jsx`
- `Footer.jsx`
- `Register.jsx`
- `Section.jsx`
- `About.jsx`

### Pages

Pages are located in the [`frontend/src/pages`](frontend/src/pages) directory:

- `AllBooking.jsx`
- `AllProviderAppointment.jsx`
- `Profilepage.jsx`
- `Home.jsx`

### Assets

Assets such as images are located in the [`frontend/src/assets`](frontend/src/assets) directory.

### Home Page Looks
![Screenshot 2025-01-19 000253](https://github.com/user-attachments/assets/9bdc4824-aa67-4438-832f-de1636ae7f3d)

![Screenshot 2025-01-19 000308 - Copy](https://github.com/user-attachments/assets/90c03245-374d-407a-88b4-c128f5ddd810)

![Screenshot 2025-01-19 000320 - Copy](https://github.com/user-attachments/assets/77ad0432-8297-417f-8dda-d391dc6a77c9)

![Screenshot 2025-01-19 000331](https://github.com/user-attachments/assets/9e5c1ab0-db47-4802-84d2-ba14bd192003)

![Screenshot 2025-01-19 000400](https://github.com/user-attachments/assets/846fc77d-23c9-4d44-92a0-7506c721267a)

![Screenshot 2025-01-19 000411](https://github.com/user-attachments/assets/9bf15cbc-1649-42c7-b426-c33946ed095d)


### Login Page
![Screenshot 2025-01-19 000537](https://github.com/user-attachments/assets/9ad7c201-0c8d-4c7f-8cae-722a316eda5b)

### Register Page
![Screenshot 2025-01-19 000550](https://github.com/user-attachments/assets/9bdf4926-7f9b-4aac-bcc2-0770ff83ff9f)


### Client Home Page
![Screenshot 2025-01-19 000651](https://github.com/user-attachments/assets/eb48aed0-2bfc-4caf-a24a-1a484a92c8d4)


### To Book Any Provider
![Screenshot 2025-01-19 000716](https://github.com/user-attachments/assets/e7f15551-3081-4801-9f58-77b15f6c9ca3)


### Booking Page
![Screenshot 2025-01-19 000756](https://github.com/user-attachments/assets/13908884-fa41-41db-a2c9-2595f17e7e77)


#### Client Profile Page
![Screenshot 2025-01-19 000756](https://github.com/user-attachments/assets/4ff82931-6b91-435f-bc38-e60b6c9c82e5)


### To Review Any Provider
![Screenshot 2025-01-19 000832](https://github.com/user-attachments/assets/f9bc6ba0-27e3-4124-9acd-c2af44eb793a)

![Screenshot 2025-01-19 000846](https://github.com/user-attachments/assets/7cb6ea37-61f1-4ac4-bd6d-4de166829f55)


### Provider Home Page
![Screenshot 2025-01-19 000927](https://github.com/user-attachments/assets/be578497-8828-4738-86d0-3848cd892df7)


### Update Details of Provider
![Screenshot 2025-01-19 000940](https://github.com/user-attachments/assets/0a63e90e-4588-41bd-b832-f5e97c38ac4c)


### All Appointment of Provider
![Screenshot 2025-01-19 000958](https://github.com/user-attachments/assets/3e972f8d-9219-45d3-a5ba-8a7af5d8a81e)


### Review Page for Provider
![Screenshot 2025-01-19 001049](https://github.com/user-attachments/assets/33322bc8-e57b-4ff5-be19-77e254af908c)


### Analysis with same pattern in Client and Provider
![Screenshot 2025-01-19 001107](https://github.com/user-attachments/assets/b2001478-9b34-47f9-a9df-03b2609f0dc0)


### Provider Profile Page
![Screenshot 2025-01-19 001744](https://github.com/user-attachments/assets/06243e9c-df09-4f0c-97bb-14e27434010a)












 









