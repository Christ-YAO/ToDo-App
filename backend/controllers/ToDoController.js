const ToDoModel = require('../models/ToDoModel');

exports.getAllToDo = async (req, res) => {
    // console.log('Get all ToDo called')
    ToDoModel.find()
        .then((todos) => res.status(200).json(todos))
        .catch(err => res.status(400).json(err))
}

exports.addToDo = async (req, res) => {
    // console.log('Add a new ToDo')
    const saveToDo = new ToDoModel({
        ...req.body
    })
    saveToDo.save()
        .then((todo) => res.status(201).json(todo))
        .catch(err => res.status(400).json(err))
}

exports.clearToDo = async (req, res) => {
    // console.log('Add a new ToDo')
    // const deleteToDos = ToDoModel.find()
    ToDoModel.deleteMany()
        .then(() => res.status(201).json({ message: "ToDo List has been cleaned !" }))
        .catch(err => res.status(404).json(err))
}

exports.deleteToDo = async (req, res) => {
    // console.log('Add a new ToDo')
    ToDoModel.findByIdAndDelete(req.body._id)
        .then(() => res.status(200).json({ message: `ToDo with ID: ${req.body._id} has been cleaned !` }))
        .catch(err => res.status(400).json(err))
}

exports.updateToDo = async (req, res) => {
    // console.log('Add a new ToDo')
    const { _id, text } = req.body
    ToDoModel.findByIdAndUpdate(_id, {text})
        .then(() => res.status(200).json({ message: `ToDo with ID: ${req.body._id} has been cleaned !` }))
        .catch(err => res.status(400).json(err))
}