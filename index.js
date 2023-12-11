// Importing the 'express' module to create a server
const express = require('express');
// Importing the MongoDB connection module from './config/mongo'
const Database = require('./config/mongo');
// Setting the port number for the server
const port = 3000;
// Importing the 'body-parser' module to parse incoming request bodies
const bodyParser = require('body-parser');

// Creating an Express application
const app = express();

// Using middleware to parse incoming JSON requests
app.use(express.json());
// Using middleware to parse incoming URL-encoded requests
app.use(bodyParser.urlencoded({ extended: true }));

// Assuming 'routers' is a directory containing index.js

// Using the '/prop' route prefix for property-related routes
app.use('/prop', require('./routers/property'));
// Using the '/inv' route prefix for inventory-related routes
app.use('/inv', require('./routers/Inventory'));

// Setting up the server to listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
