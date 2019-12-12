import React, { useState, useEffect } from "react";
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import '../components/mystyle.css'
import Logo from '../components/Clogo.png'
// import axios from 'axios'

const FunctionalComponent = () => {

    const [employees, setEmployees] = useState({});
    const [total, settotal] = useState({});
    const [isError, setErrors] = useState(false)
    // const [isSecond, setSecond] = useState(true)
// console.log(employees)
    useEffect(() => {
        // function getFetchUrl() {
        //     return ("http://localhost:7000/employees")

        // }

        async function fetchData() {
            const res = await fetch("http://localhost:7000/employees");
            const resctc = await fetch("http://localhost:7000/employee/ctc");
                //    setEmployees({employeeDetails: res.data})
            res
              .json()
              .then(res => setEmployees({employeeDetails: res}))
              .catch(err => setErrors(err));
            resctc
               .json()
              .then(resctc => settotal({totalCtc: resctc}))
              .catch(err => setErrors(err));
        
        }

          fetchData();
        

    }, []);
        
    






    //     if (isFirst) {
    //         fetch("http://localhost:7000/employees")
    //             .then(response => response.json())
    //             .then(response => {
    //                 setFirst(false)
    //                 setEmployees({...employees, employeeDetails:response});
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             })
    //     }
    // }, [isFirst])
    // useEffect(() => {
    //     async function fetchData1() {
    //         const resctc = await fetch("http://localhost:7000/employee/ctc");
    //                 // setEmployees({totalCtc: resctc.data})

    //         resctc
    //           .json()
    //           .then(resctc => setEmployees({totalCtc: resctc}))
    //           .catch(err => setErrors(err));
    //       }
        
    //       fetchData1();
          
    //     }, []);
    

    
        





    //     if (isSecond) {
    //         fetch("http://localhost:7000/employee/ctc")
    //         .then(responsectc => responsectc.json())
    //         .then(responsectc => {
    //             setSecond(false)
    //             setEmployees({...employees, Totalctc:responsectc});
                
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    //     }

    // }, [isSecond]);

    const columns = [
        {
            Header: "EmployeeID",
            accessor: "EmployeeId",
            style: {
                textAlign: 'center',
                // padding: 5
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
            accessor: "Project",
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
            accessor: "DOJ",
            style: {
                textAlign: 'center'
            }
        },
        {
            Header: "Blood Group",
            accessor: "Blood group",
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
                            textAlign: 'center' /*borderRadius: 50px */
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
            // Rows: props=> {
            //         return (
            //             <div style={{ backgroundColor: 'blue' }}></div>
            //         );
            //     },
        }
    ]
    return (
        
        <div>
            <div style={{
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
                            // margin: '10px'
                        }
                    }>

                        <span style={
                            {
                                color: 'blue',
                                fontSize: '16px',
                                padding: '5px 24px',
                                // border: '1px solid rgb(0,0,210)',
                                borderRadius: '35px'
                            }

                        }
                        >Total CTC</span>


                        <span style={
                            { color: 'white', fontSize: '16px', padding: '5px 24px', borderRadius: '35px' }
                        }
                        >{total.totalCtc}/-</span>
                    </div>
                </div>



               <ReactTable columns={columns} data={employees.employeeDetails} defaultPageSize={10}></ReactTable>
            </div>


            {/* <div>employees: {employees && employees.length}</div> */}
            {/* <div>
      <span>{JSON.stringify(employees)}</span>
      <hr />
    <span>Is Error: {JSON.stringify(isError)}</span>
    </div> */}

        </div>


    )
}

export default FunctionalComponent;