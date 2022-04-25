// Getting the controller from the module folder
const crudModule = require("../modules/crud_modules");

// Gets all the data sets in database
const getAllData = async (req, res) => {
  try {
    const dataBody = await crudModule.find({});
    res.status(200).json({ dataBody });
    console.log(dataBody)
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

// Gets a single data
const getOneData = async (req, res) => {
  try {
    const { itemID } = req.params;
    const dataBody = await crudModule.findById({ _id: itemID });
    res.status(200).json({ dataBody });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

// Updates an existing data
const updateData = async (req, res) => {
  try {
    const { itemID } = req.params;
    const dataBody = await crudModule.findByIdAndUpdate(
      { _id: itemID },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

// creates Data and assigns an id to it
const createData = async (req, res) => {
  try {
    // creates the data from the body
    const dataBody = await crudModule.create(req.body);
    res.status(201).json({ dataBody });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

// Delete a data with a particular id
const deleteData = async (req, res) => {
  try {
    const { itemID } = req.params;
    const dataBody = await crudModule.findByIdAndDelete({ _id: itemID });
    if (!dataBody) {
      res.status(404).json({ message: `No data with ${itemID}` });
    }
    res.status(200).json({ dataBody });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

module.exports = {
  getAllData,
  getOneData,
  updateData,
  createData,
  deleteData,
};
