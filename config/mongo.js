// Importing the 'mongoose' module
const mongoose = require('mongoose');

// Async function to connect to the MongoDB database
async function connectToDatabase() {
  try {
    // Using 'await' to asynchronously connect to the MongoDB database
    await mongoose.connect('mongodb://127.0.0.1:27017/byslef', {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Adding this option for new versions of Mongoose
    });

    // Logging a message when the connection is successful
    console.log('Connected to Database :: MongoDB');
  } catch (error) {
    // Logging an error message if there's an issue connecting to the database
    console.error('Error connecting to MongoDB', error);
  }
}

// Calling the async function to connect to the database
connectToDatabase();

// Exporting the MongoDB connection for use in other parts of the application
module.exports = mongoose.connection;
