module.exports = (app) => {
    const Employee = require('../controllers/Employees.controller');

    app.post('/employees', Employee.create);
    app.get('/employees', Employee.findAll);
    app.get('/employees/:employeeId', Employee.findOne);
    app.put('/employees/:employeeId', Employee.update);
    app.delete('/employees/:employeeId', Employee.delete);
}