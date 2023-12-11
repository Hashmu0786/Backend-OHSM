// Importing the 'InvSchema' model
const User = require('../models/InvSchema');

// Controller function to get all inventory data
module.exports.getdata = async function (req, res) {
    try {
        const data = await User.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Controller function to create a new inventory entry
module.exports.create = async function (req, res) {
    try {
        const { propertyname, propertyInventoryType, otherPropertyInventoryType, capacity, amenities, availabilityStatus, notes } = req.body;
        const newuser = new User({
            propertyname, propertyInventoryType, otherPropertyInventoryType, capacity, amenities, availabilityStatus, notes
        });
        await newuser.save();
        res.status(201).json({ message: "New Property added successfully", user: newuser });
    } catch (error) {
        res.status(500).send(error);
    }
};

// Controller function to delete an inventory entry
module.exports.delete = async function (req, res) {
    try {
        const result = await User.deleteOne({ _id: req.params.Userid });
        if (result.deletedCount === 1) {
            res.json({ message: "User is deleted" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// Controller function to update an inventory entry
module.exports.update = async function (req, res) {
    try {
        const { propertyname, propertyInventoryType, otherPropertyInventoryType, capacity, amenities, availabilityStatus, notes } = req.body;
        const updatedProduct = await User.findByIdAndUpdate(
            req.params.Userid,
            { propertyname, propertyInventoryType, otherPropertyInventoryType, capacity, amenities, availabilityStatus, notes },
            { new: true }
        );

        if (updatedProduct) {
            res.status(200).json({ message: "Property updated successfully", user: updatedProduct });
        } else {
            res.status(404).json({ message: "Property not found" });
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

// Controller function to get a single inventory entry by Userid
module.exports.singledata = async function (req, res) {
    try {
        const onedata = await User.findById(req.params.Userid);
        if (onedata) {
            res.status(200).json(onedata);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
