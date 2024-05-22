# Project Setup Instructions

This document provides step-by-step instructions on how to set up and run the project locally. Please ensure you have Node.js version `18.17.0` installed on your system before proceeding, as this version is recommended for compatibility.

## Backend Setup

1. Navigate to the backend directory:
   `cd backend`

2. Install the required dependencies:
   `npm install`

3. Start the backend server:
   `npx nodemon app.js`
   it will start the server at port 5000

This command runs the backend server using Nodemon, which automatically restarts the server whenever file changes are detected.

## Frontend Setup

1. Navigate to the frontend directory:
   `cd frontend`

2. Install the required dependencies:
   `npm install`

3. Start the frontend application:
   `npm start`

This command compiles the app for development and opens it in the browser. The app will automatically reload if you change any of the source files.

## Note

- Ensure you have Node.js version 18.17.0 installed on your system. You can verify your Node.js version by running `node -v` in your terminal.
- If you encounter any issues, please refer to the troubleshooting section below or contact the project maintainer.

## Troubleshooting

- If you encounter issues with missing dependencies, try deleting the `node_modules` folder and the `package-lock.json` file in both the backend and frontend directories, then reinstall the dependencies using `npm install`.
- Ensure your terminal or command prompt is open in the root directory of the project before running the above commands.

## Contact

For further assistance or inquiries, please contact furqanhameed558@gmail.com or +923005169865 (whatsapp as well).
