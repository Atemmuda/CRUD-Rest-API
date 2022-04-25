const express = require('express');
const router = express.Router();


//getting functions written in the crud_contrller module (detructuring)
 const {getAllData, getOneData, updateData, createData, deleteData} = require('../controllers/crud_controller')

 router.route('/').get(getAllData).post(createData)

 // Base on an Id we can get one task, can update an existing item, can deleted one item
 router.route('/:taskId').get(getOneData).patch(updateData).delete(deleteData)

 //Exporting for the use in other files
 module.exports = router;