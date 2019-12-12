import React, {Component} from 'react'

class List extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.emp.ID}</td>
                <td>{this.props.emp.name}</td>
                <td>{this.props.emp.Project}</td>
                <td>{this.props.emp.experience}</td>
                <td>{this.props.emp.salary}</td>
                <td>{this.props.emp.DOJ}</td>
            </tr>
            
        )
    }
}

export default List;