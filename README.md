# Yoga Class Admission System

This project is a web-based application for managing the admission process for monthly Yoga classes. Built with a Node.js/Express backend and a React front-end, it offers a streamlined user experience for registration, login, and management of class schedules.

## Overview

The system is designed to allow users to register for Yoga classes, log in to their accounts, view their details, and update their class timings. It is structured around four key components:

1. App.js - The main entry point of the React application, handling routing to different components.
2. Dashboard.js - Displays user details and allows updating of class timings.
3. Login.js - Handles user authentication.
4. Register.js - Manages new user registrations.

## Features

### Registration

- *Endpoint*: /register (POST)
- *Functionality*: Allows new users to sign up for the Yoga classes. 
- *Inputs*: Name, Email (unique), Password, Age, Contact, Gender, Slot Timing. All fields are mandatory.
- *Validation*: Checks for the uniqueness of the email and the validity of other input fields as per the provided specifications.
- *Process*: On successful validation, user details are added to the database.

### Login

- *Endpoint*: / (POST)
- *Functionality*: Authenticates users and provides access to their dashboard.
- *Inputs*: Email and Password.
- *Process*: Validates user credentials against the database. On successful login, a JWT token is generated and stored in cookies for session management.

### Dashboard

- *Endpoint*: /dashboard (GET)
- *Functionality*: Displays the details of the logged-in user.
- *Process*: Retrieves user data using the JWT token stored in cookies.

### Update Class Timing

- *Endpoint*: /update (PUT)
- *Functionality*: Allows users to change their class timing.
- *Process*: Updates the user's slot timing in the database for the next month.

## Assumptions

- Age range for enrollment is 18-65 years.
- Users are charged a fixed monthly fee regardless of the enrollment date.
- Users can enroll in one of four daily batches and can change batches monthly.
- Payments and specific payment validations are handled separately and are not covered in this system.

## Technology Stack

- *Backend*: Node.js with Express framework.
- *Frontend*: React.js.


## Prerequisites

- Node.js (https://nodejs.org/)
- npm (Node Package Manager, comes with Node.js)

# Installation

## Client Setup

1. **Navigate to the /client directory**:
   Open a terminal and change to the client directory of the Yoga application. Then, install the dependencies and start the React client.

   ```bash
   cd /yoga/client
   npm install
   npm run start
   

## Server Setup

Before setting up the server, ensure you have the following prerequisites installed:

- *Node.js*: Download and install from [Node.js website](https://nodejs.org/).
- *npm*: Node Package Manager, comes with Node.js installation.
- *MongoDB Atlas Account*: Required for MONGO_URI. Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Steps:

1. **Navigate to the /server directory**:
   Change to the server directory of the Yoga application.

   ```bash

   cd /yoga/server
   

2. *Install dependencies*:
   Run npm install to install the necessary node modules.

   ```bash

   npm install
   

3. *Set Environment Variables*:
   Set the JWT_SECRET for authentication and MONGO_URI for the database connection.

   ```bash

   JWT_SECRET=your_jwt_secret_key
   MONGO_URI=your_mongo_uri
   

4. *Start the server*:
   Launch the Node.js server.

   ```bash

   node server.js
   

After completing these steps, your Yoga Class Admission System should be up and running.





