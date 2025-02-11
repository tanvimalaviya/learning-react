import React from 'react'

const ArrayDemo3 = () => {
    var employees = [
    {
        id:101,
        name:"shyam",
        age:21,
        salary:21000,
        gender:"male"
    },
    {
        id:102,
        name:"parth",
        age:20,
        salary:29000,
        gender:"male"
    },
    {
        id:103,
        name:"geeta",
        age:16,
        salary:18000,
        gender:"female"
    },
    {
        id:104,
        name:"ram",
        age:26,
        salary:20000,
        gender:"male"
    },
    {
        id:105,
        name:"seeta",
        age:24,
        salary:25000,
        gender:"female"
    }

    ]
  return (
     <div style={{ textAlign: "center" }}>
    <h1>Array Demo 3</h1>
    <table class="table table-dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>SALARY</th>
          <th>GENDER</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => {
          return (
            <tr>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.salary}</td>
              <td>{emp.gender}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
      
    </div>
  )
}

export default ArrayDemo3
