// Importing the 'express' module to create a router
const express = require('express');
const router = express.Router();

// Importing the controller functions from '../Controllers/Prop'
const userdata = require('../Controllers/Prop');

// Define routes for handling different HTTP methods

// GET request to retrieve all property data
router.get('/getproperty', userdata.getdata);

// POST request to create new property data
router.post('/createproperty', userdata.create);

// GET request to retrieve a single property data by Userid parameter
router.get('/getproperty/:Userid', userdata.singledata); // Use ':Userid' to match the parameter in the controller

// PUT request to update property data by Userid parameter
router.put('/getproperty/:Userid', userdata.update); // Use ':Userid' to match the parameter in the controller

// DELETE request to delete property data by Userid parameter
router.delete('/getproperty/:Userid', userdata.delete); // Use ':Userid' to match the parameter in the controller

// Exporting the router for use in other files
module.exports = router;
