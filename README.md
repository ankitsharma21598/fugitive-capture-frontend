# Front-end for Fugitive Capture Project

## Overview
It is responsible for handling cop selections, simulating the fugitive's location, and determining if the fugitive has been captured. The frontend is built using React, a popular JavaScript library for building user interfaces.

## Technologies Used
- **React**: Used for building the frontend components and managing the application state.
- **React Router**: Utilized for handling navigation and routing within the application.
- **Axios**: Used for making HTTP requests to the backend server.
- **React Toastify**: Employed for displaying toast notifications to the user.
- **Tailwind CSS**: Used for styling the components and providing a responsive design.

## Folder Structure
The frontend part of the project is organized into several directories:
- **src/components**: Contains reusable React components used throughout the application.
- **src/context**: Includes the context provider for managing state across components.
- **src/assets**: Stores static assets such as images and icons.
- **src/pages**: Houses the main page components of the application.

## Setup Instructions
To set up the frontend part of the project, follow these steps:
1. Clone the repository to your local machine `git clone https://github.com/ankitsharma21598/fugitive-capture-frontend.git`.
2. Navigate to the `fugitive-capture-backend` directory.
3. Run `npm install` to install the required dependencies.
4. Once the dependencies are installed, run `npm start` to start the development server.
5. Access the application by navigating to `http://localhost:3000` in your web browser.

## Key Files
- **App.js**: The main component of the application, responsible for rendering all routes.
- **context/CaptureContext.js**: The context provider managing state related to capturing fugitives.
- **pages/CaptureForm.js**: The page component for capturing fugitives, where users can select cops, cities, and vehicles.
- **pages/CaptureResult.js**: The page component for displaying the capture result after submitting the form.

## Additional Notes
- Ensure that the backend server is running on `http://localhost:5000` for the frontend to communicate properly.
- The application is designed to be responsive and should work well on various screen sizes.
- For any questions or issues, feel free to contact the project maintainers.
