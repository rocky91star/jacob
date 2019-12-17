import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Header from '../components/Header'

const Table = (props) => {
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
                    }>View</button>
                )
            },
            width: 100,
            maxWidth: 100,
            minWidth: 100,
        }]
    return (
        <div>
            <Header />
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
                        }}>
                        <span style={
                            {
                                color: 'blue',
                                fontSize: '16px',
                                padding: '5px 24px',
                                borderRadius: '35px'
                            }
                        }>Total CTC</span>
                        <span style={
                            {
                                color: 'white',
                                fontSize: '16px',
                                padding: '5px 24px',
                                borderRadius: '35px'
                            }
                        }>{props.total}/-</span>
                    </div>
                </div>
            </div>
            <ReactTable
                columns={columns}
                data={props.details}
                defaultPageSize={10}></ReactTable>
        </div>
    )
}
export default Table;
