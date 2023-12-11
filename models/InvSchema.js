// Importing the 'mongoose' module
const mongoose = require('mongoose');

// Defining the Mongoose schema for Inventory
const InventorySchema = new mongoose.Schema({
  // Property name, a required string
  propertyname: {
    type: String,
    required: true,
  },
  // Type of property inventory, a required string
  propertyInventoryType: {
    type: String,
    required: true,
  },
  // Other property inventory type, a string (optional)
  otherPropertyInventoryType: {
    type: String,
  },
  // Capacity of the inventory, a required number
  capacity: {
    type: Number,
    required: true,
  },
  // Amenities of the inventory, a string (optional)
  amenities: {
    type: String,
  },
  // Availability status, a required string with predefined values
  availabilityStatus: {
    type: String,
    enum: ['Available', 'Occupied', 'Under Maintenance'],
    required: true,
  },
  // Additional notes for the inventory, a string (optional)
  notes: {
    type: String,
  },
});

// Creating a Mongoose model named 'Inventory' based on the defined schema
const Inventory = mongoose.model('Inventory', InventorySchema);

// Exporting the 'Inventory' model for use in other files
module.exports = Inventory;
