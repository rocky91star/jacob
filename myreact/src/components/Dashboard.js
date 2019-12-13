import React, { useState, useEffect } from "react";
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Logo from '../components/Clogo.png'
import config from '../config/default.json'
const DashboardComponent = ()=> {

    const [employees, setEmployees] = useState({});
    const [total, settotal] = useState({});
    const [isError, setErrors] = useState(false)
    
    useEffect(() => {
       
        async function fetchData() {
            const res = await fetch(`${config.BASE_URL}/employees`);
            const resCtc = await fetch(`${config.BASE_URL}/employee/ctc`);
               
            res
              .json()
              .then(res => setEmployees({employeeDetails: res}))
              .catch(err => setErrors(err));
            resCtc
              .json()
              .then(resCtc => settotal({totalCtc: resCtc}))
              .catch(err => setErrors(err));
        
        }

          fetchData();
        
    }, []);
        
    
    const columns = [
        {
            Header: "EmployeeID",
            accessor: "employeeId",
            style: {
                textAlign: 'center',
                padding: 5
            }
        },
        {
            Header: "Name",
            accessor: "name",
            style: {
                textAlign: 'center'
            }
        },
        {
            Header: "Project",
            accessor: "project",
            style: {
                textAlign: 'center'
            }
        },
        {
            Header: "Experience",
            accessor: "experience",
            style: {
                textAlign: 'center'
            }
        },
        {
            Header: "Salary",
            accessor: "salary",
            style: {
                textAlign: 'center'
            }
        },
        {
            Header: "DateofJoining",
            accessor: "doj",
            style: {
                textAlign: 'center'
            }
        },
        {
            Header: "Blood Group",
            accessor: "bloodGroup",
            style: {
                textAlign: 'center'
            }
        },
        {
            Header: "Actions",
            Cell: props => {
                return (
                    <button style={
                        {
                            backgroundColor: 'white',
                            color: "red",
                            textAlign: 'center' 
                        }
                    }
                    >
                        View
                    </button>
                )
            },
            width: 100,
            maxWidth: 100,
            minWidth: 100,
    }
    ]
    return (
        
        <div>
            <div style={
                {
                display: 'flex',
                justifyContent: "space-between",
                maxWidth: '100',
                maxHeight: '100',
                padding: '20px',
                backgroundColor: '#fefefe'
                }}>
                <img src={Logo} alt={Logo} maxWidth='30px' />

            </div>

            <div class="container-fluid" >

                <div style={
                    {
                    display: 'flex',
                    justifyContent: "space-between",
                    margin: '10px'
                    }
                }>
                    <div style={
                        {
                        maxWidth: '100',
                        fontSize: '2vw',
                        color: 'red'
                        }
                    }>Employee List</div>
                        <div style={
                            {
                            background: 'linear-gradient(to right, #f0f0f0 50%, blue 50%)',
                            textAlign: 'center',
                            maxWidth: '100',
                            border: '1px solid blue',
                            borderRadius: '35px',
                            padding: '10px',
                            }
                    }>
                        <span style={
                            {
                            color: 'blue',
                            fontSize: '16px',
                            padding: '5px 24px',
                            borderRadius: '35px'
                            }

                        }
                        >Total CTC</span>
                        <span style={
                            {
                            color: 'white', 
                            fontSize: '16px', 
                            padding: '5px 24px', 
                            borderRadius: '35px'
                            }
                        }>{total.totalCtc}/-</span>
                    </div>
                </div>


   <ReactTable columns={columns} 
               data={employees.employeeDetails} 
               defaultPageSize={10}></ReactTable>
            
            </div>

        </div>


    )
}

export default DashboardComponent;