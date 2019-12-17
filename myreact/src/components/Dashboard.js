import React, { useState, useEffect } from "react";
import config from '../config/default.json';
import Table from '../components/Table.js'

const DashboardComponent = () => {
  const [employees, setEmployees] = useState({});
  const [total, setTotal] = useState({});
  const [isError, setErrors] = useState(false)
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${config.BASE_URL}/employees`);
      const resCtc = await fetch(`${config.BASE_URL}/employee/ctc`);
      res
        .json()
        .then(res => setEmployees({ employeeDetails: res }))
        .catch(err => setErrors(err));
      resCtc
        .json()
        .then(resCtc => setTotal({ totalCtc: resCtc }))
        .catch(err => setErrors(err));
    }
    fetchData();
  }, []);
  return (
    <div>
      <Table details={employees.employeeDetails} total={total.totalCtc} />
    </div>
  )
}
export default DashboardComponent;