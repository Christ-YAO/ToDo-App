const mongoose = require('mongoose');

const ToDoSchema = mongoose.Schema(
    {
        text: {type: String, require: true}
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('ToDo', ToDoSchema);