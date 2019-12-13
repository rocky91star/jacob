const express = require('express');
const app = express();
const fs = require('fs');
const query = require('querystring');
const bodyparser = require('body-parser');
var cors = require('cors');
app.use(bodyparser.urlencoded({extended: true}));

app.use(bodyparser.json());
app.use(cors());

const port = 7000;
app.listen(port,() => console.log("App is running on port 7000"));


function read(){
    return fs.readFileSync('./Task1.json', 'utf-8', (err,jsontring)=>{
         if(err){
             console.log('Error in fs',err);
         } else {
           
            return (JSON.parse(jsontring));
         }
     })
 };
 
 app.get('/employees',(req,res)=>{

    const details= read();
    let employeesIds = details.employees.map(function({id,...rest}){  
         return {employeeId:id,...rest}
    });
    
    res.json(employeesIds);
 });


 app.get('/employee',(req,res)=>{

    const filtr = read();
    let project1 = req.query.project;
    const final= filtr.employees.filter(employees =>  employees.project === project1);
          res.send(final);

 });


 app.get('/employee/ctc',(req,res) =>{

    const ctc = read();
    let total= ctc.employees.reduce(function (acc, {salary}) {
         return acc + salary;
   }, 0);

   res.json(total);
        
});
