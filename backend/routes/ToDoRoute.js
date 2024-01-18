const express = require('express');
const router = express.Router();
const ToDoCtrl = require('../controllers/ToDoController');

router.get('/', ToDoCtrl.getAllToDo);
router.post('/save', ToDoCtrl.addToDo);
router.delete('/deleteall', ToDoCtrl.clearToDo);
router.post('/delete', ToDoCtrl.deleteToDo);
router.put('/update', ToDoCtrl.updateToDo);

module.exports = router;