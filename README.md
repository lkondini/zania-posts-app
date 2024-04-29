# Getting Started with Create React App

This posts project was built using [Create React App] (https://github.com/facebook/create-react-app).

## Available Scripts

Initially you can clone the zania-posts-app and initialize the node modules by running

### `npm i`

After node module initialization in the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Project structure`
- Api
  - endpoints (GET)
- Mock-server
  - server files...
- Grid
  - components ...
- Shared
  - Reusable components...

### `Step by Step process of completing the assignment`

- Setup the Grid Layout with ttitle and Image
- Made a custom shared component React-Image-Viewer to enlarge to view image in full screen mode.
- Split the posts and aligned the grid layout in 2 rows 
- Created a custom to drag and drop the posts, using react-sortable npm
- Setup the mock server and integrateed them with the browser
- Mock server was used to fetch the json data using fetch api
- Then mapped the json data with the posts grid layout
- Installed docker desktop for the initial configurations
- Then set up the required configuration files to use docker-compose to upload the file

### `How to clone and run on docker desktop app`

- All the required docker compose configurations are set up in the project.
- Clone into the local system
- Navigate into the main root folder and execute "docker compose up" for the project to start building on docker
- Once completed it can be tested and available for use on docker app

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


