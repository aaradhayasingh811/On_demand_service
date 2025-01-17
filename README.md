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

- `POST /api/user/register`: Registers a new user.
- `POST /api/user/login`: Logs in a user and returns a token.
- `GET /api/user/logout`: Logs out a user.
- `GET /api/user/refresh_token`: Refreshes the access token.
- `GET /api/user/infor`: Retrieves user information.
- `PATCH /api/user/update`: Updates user information.
- `PATCH /api/user/update_password`: Updates user password.
- `POST /api/user/forgot`: Sends a password reset email.
- `POST /api/user/reset`: Resets the user password.

#### Booking Routes

- `POST /api/booking`: Creates a new booking.
- `GET /api/booking`: Retrieves all bookings.
- `GET /api/booking/:id`: Retrieves a specific booking by ID.
- `PATCH /api/booking/:id`: Updates a booking by ID.
- `DELETE /api/booking/:id`: Deletes a booking by ID.

#### Provider Routes

- `POST /api/provider`: Registers a new provider.
- `GET /api/provider`: Retrieves all providers.
- `GET /api/provider/:id`: Retrieves a specific provider by ID.
- `PATCH /api/provider/:id`: Updates a provider by ID.
- `DELETE /api/provider/:id`: Deletes a provider by ID.

#### Email Routes

- `POST /api/email/send`: Sends an email.

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

## Additional Information

For more details on specific files or functions, refer to the respective file paths provided in the documentation.
