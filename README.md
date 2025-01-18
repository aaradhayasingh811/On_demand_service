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

### Environment Variables

The backend uses environment variables defined in the [`backend/.env`](backend/.env) file. Key variables include:

- `PORT`: The port number the server listens on.
- `ACCESS_TOKEN_SECRET`: Secret key for access tokens.
- `REFRESH_TOKEN_SECRET`: Secret key for refresh tokens.
- `MONGODB_URI`: MongoDB connection string.
- `CLOUD_NAME`, `API_KEY`, `API_SECRET`: Cloudinary configuration for file uploads.
- `CLIENT_URL`: URL of the frontend client.
- `USER_EMAIL`, `USER_PASS`: Email credentials for sending emails.

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

Home Page Looks![Screenshot 2025-01-19 000253](https://github.com/user-attachments/assets/9bdc4824-aa67-4438-832f-de1636ae7f3d)

