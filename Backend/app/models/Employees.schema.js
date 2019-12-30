const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const employeesSchema= new Schema({
    name: String,
    id: String,
    age: Number,
    salary: Number,
    project: String,
    doj: String,
    experience: String,
    bloodGroup: String
});

module.exports = mongoose.model('Employees', employeesSchema);