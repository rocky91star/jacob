const Employees = require('../models/Employees.schema.js');

exports.create = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Employees content cannot be empty"
        });
    }

    name = req.body.name;
    id = req.body.id;
    age = req.body.age;
    salary = req.body.salary;
    project = req.body.project;
    doj = req.body.doj;
    experience = req.body.experience;
    bloodGroup = req.body.bloodGroup;

    const employees = new Employees({ name, id, age, salary, project, doj, experience, bloodGroup });
    employees.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the employees."
            });
        });
};

exports.findAll = (req, res) => {
    Employees.find()
        .then(employees => {
            res.send(employees);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving employees."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.employeeId;
    Employees.findOne({ id })
        .then(employees => {
            if (!employees) {
                return res.status(404).send({
                    message: "employees not found with id " + req.params.employeeId
                });
            }
            res.send(employees);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Emloyees not found with id " + req.params.employeeId
                });
            }
            return res.status(500).send({
                message: "Error retrieving employees with id " + req.params.employeeId
            });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Employees content cannot be empty"
        });
    }
    name = req.body.name;
    id = req.body.id;
    age = req.body.age;
    salary = req.body.salary;
    project = req.body.project;
    doj = req.body.doj;
    experience = req.body.experience;
    bloodGroup = req.body.bloodGroup;

    Employees.findOneAndUpdate(req.params.employeeId, { name, id, age, salary, project, doj, experience, bloodGroup }, { new: true })
        .then(employees => {
            if (!employees) {
                return res.status(404).send({
                    message: "Employees not found with id " + req.params.employeeId
                });
            }
            res.send(employees);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Employees not found with id " + req.params.employeeId
                });
            }
            return res.status(500).send({
                message: "Error updating employees with id " + req.params.employeeId
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.employeeId;
    Employees.findOneAndDelete({ id })
        .then(employees => {
            if (!employees) {
                return res.status(404).send({
                    message: "Employees not found with id " + req.params.employeeId
                });
            }
            res.send({ message: "Employees deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Employees not found with id " + req.params.employeeId
                });
            }
            return res.status(500).send({
                message: "Could not delete employees with id " + req.params.employeeId
            });
        });
};