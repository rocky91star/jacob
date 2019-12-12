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
// app.get('/home', function(req, res){
//     res.send('Employees Details');
// }
// );



// fs.readFile('./Task1.json', 'utf-8', (err, jsonstring) => {
//      if (err) {
//          console.log('File read failed:', err);
//          return;
//      }
//      console.log('File data:', jsonstring);
// }
// );

function read(){
    return fs.readFileSync('./Task1.json', 'utf-8', (err,jsontring)=>{
         if(err){
             console.log('Error in fs',err);
         } else {
            //  console.log(jsontring)
             return jsontring;
         }
     })
 };
 
 app.get('/employees',(req,res)=>{
    var result= JSON.parse(read());
   let task = req.query.remove;
    // console.log('Employees',result)
    var EmployeesIds = result.Employees.map(function({ID,...rest}){  
        return {EmployeeId:ID,...rest}
        }
    );
    res.json(EmployeesIds);
 }
 );


 app.get('/employee',(req,res)=>{
    var result1 = JSON.parse(read());
    var project1 = req.query.project;
    const final= result1.Employees.filter(Employees =>  Employees.Project === project1);
    res.send(final);
 });


 app.get('/employee/ctc',(req,res) =>{

  var result2 = JSON.parse(read());
  
  //console.log('Employees',result2);
  var total= result2.Employees.reduce(function (acc, {salary}) {
    return acc + salary;
   }, 0);
    res.json(total);
//    var total = result.Employees.reduce((acc,salary)=>acc+salary,0);
//      return('Total salary of the employees='+total);
        
});




// fs.readFile('./Task1.json', 'utf8', (err, jsonstring) => {
//     if (err) {
//         console.log("Error reading file from disk:", err)
//         return
//     }
//     try {
//         const Employees = JSON.parse(jsonstring)
//         console.log("Employees salary is:",Employee.salary) 
// } catch(err) {
//         console.log('Error parsing JSON string:', err)
//     }
// })


