import React from 'react'

const ArrayDemo4 = () => {
    var employees = [
    {
        id:101,
        name:"shyam",
        age:21,
        salary:15000,
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
        salary:14000,
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
        age:25,
        salary:25000,
        gender:"female"
    }

    ]
  return (
     <div style={{ textAlign: "center" }}>
    <h1>Array Demo 4</h1>
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
              <td>
              <span style={{color:emp.name.startsWith("s")?"red":"white"}}>
                        {emp.name}
                    </span>
                </td>
              <td>
                <span style={{color:emp.age==25?"green":"white"}}>
                {emp.age}
                </span>
              </td>
              <td style={{backgroundColor:emp.salary>=17000?"darkgreen":"black"}}>{emp.salary}</td>
              <td style={{backgroundColor:emp.gender=="male"?"blue":"pink"}}>{emp.gender}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
      
    </div>
  )
}

export default ArrayDemo4
