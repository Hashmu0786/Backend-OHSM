// Importing the 'mongoose' module
const mongoose = require('mongoose');

// Defining the Mongoose schema for Property
const propertySchema = new mongoose.Schema({
  // Type of property, a required string
  propertyType: {
    type: String,
    required: true,
  },
  // Name of the property, a required string
  propertyName: {
    type: String,
    required: true,
  },
  // Phone number associated with the property, a required string
  phoneNumber: {
    type: String,
    required: true,
  },
  // Email address associated with the property, a required string
  emailAddress: {
    type: String,
    required: true,
  },
  // Address of the property, a required string
  address: {
    type: String,
    required: true,
  },
  // State where the property is located, a required string
  state: {
    type: String,
    required: true,
  },
  // City where the property is located, a required string
  city: {
    type: String,
    required: true,
  },
});

// Creating a Mongoose model named 'Property' based on the defined schema
const Property = mongoose.model('Property', propertySchema);

// Exporting the 'Property' model for use in other files
module.exports = Property;
