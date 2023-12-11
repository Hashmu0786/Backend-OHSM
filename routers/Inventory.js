// Importing the 'express' module to create a router
const express = require('express');
const router = express.Router();

// Importing the controller functions from '../Controllers/Inv'
const userdata = require('../Controllers/Inv');

// Define routes for handling different HTTP methods
// GET request to retrieve all inventory data
router.get('/getinventory', userdata.getdata);

// POST request to create new inventory data
router.post('/createinventory', userdata.create);

// GET request to retrieve a single inventory data by Userid parameter
router.get('/getinventory/:Userid', userdata.singledata); // Use ':Userid' to match the parameter in the controller

// PUT request to update inventory data by Userid parameter
router.put('/getinventory/:Userid', userdata.update); // Use ':Userid' to match the parameter in the controller

// DELETE request to delete inventory data by Userid parameter
router.delete('/getinventory/:Userid', userdata.delete); // Use ':Userid' to match the parameter in the controller

// Exporting the router for use in other files
module.exports = router;
