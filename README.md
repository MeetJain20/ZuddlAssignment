# Zuddl Assignment

## Table of Contents

- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)

## Getting Started

Follow these steps to set up and run the Digital Wall project on your local machine:

1. Extract the Zip Folder
2. Go to the FrontEnd Directory
3. Run Command: `npm install`
4. Start the development server: `npm start`
5. Open your web browser and visit: `http://localhost:3000`

## Technologies Used

- React: Frontend library for building user interfaces.
- Redux: State management library for managing application state.

## If a user can create and edit stages for a particular board. For example instead of Open > In Progress > Done if they want the stages of their task board to be Read > Working > Reviewing > Completed

1. For this case they simply have to change the title of boards as mentioned in the details.js file.
2. I have harcoded the titles since there were only 4 but we can even make an array and call the Board component by mapping

## If users can comment on tasks

1. We can add a comment array for each posts in the array.
2. Thus can make an api call for displaying thode comment for each individual post.

## How will you do error handling?

1. I have simply use try and catch block for error handling but we can also use error boundaries
