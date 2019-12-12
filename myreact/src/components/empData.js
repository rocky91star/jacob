import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import '../components/mystyle.css'
import Logo from '../components/Clogo.png'

class empData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employeesDetails: [],
            Totalctc: ''

        }

    }
    componentDidMount() {

        axios.get("http://localhost:7000/employees")
            .then(response => {
                this.setState({ employeesDetails: response.data })
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })

        axios.get("http://localhost:7000/employee/ctc")
            .then(responsectc => {
                this.setState({ Totalctc: responsectc.data })
                console.log(responsectc.data)
            })
            .catch(error => {
                console.log(error)
            })

    }

    render() {
        const columns = [ 
            {
                Header: "EmployeeID",
                accessor: "EmployeeId",
                style: {
                    textAlign: 'center',
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
                Header : "Salary",
                accessor : "salary",
                style:{
                    textAlign:'center'
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
                            { backgroundColor: 'white',
                              color: "red", 
                              textAlign: 'center' }
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
    <div style={{ display: 'flex',
                 justifyContent: "space-between", 
                 maxWidth: '100',
                 maxHeight: '100',
                 padding: '20px',
                 backgroundColor: '#fefefe' }}>

                    <img src={Logo} alt={Logo} maxWidth='30px' />

    </div>
                
                
                <div class="container-fluid" >
                    
                    <div style={
                        {display:'flex',
                                 justifyContent:"space-between",
                                 margin:'10px'}
                            }>

                            <div style={
                                {maxWidth:'100',
                                 fontSize:'2vw',
                                 color:'red'}
                                 }>Employee List</div>
        
        <div style= {
                     {
                        background:'linear-gradient(to right, #f0f0f0 50%, blue 50%)',
                        textAlign:'center',
                        maxWidth:'100',
                        border:'1px solid blue',
                        borderRadius:'35px',
                        padding:'10px',
                                   }
                    }>
            
<span style={
    {color: 'blue',
    fontSize:'16px',
    padding:'5px 24px',
     borderRadius: '35px'
}

    }
>
        Total CTC
</span>


<span style={
    {color:'white',fontSize:'16px',padding:'5px 24px', borderRadius: '35px'}
    }
    >{this.state.Totalctc}/-
</span>
        </div>
                        </div>
                    

                    
                        <ReactTable columns={columns} data={this.state.employeesDetails} defaultPageSize={10}></ReactTable>
                </div>

            </div>
        )
    }
}

export default empData;