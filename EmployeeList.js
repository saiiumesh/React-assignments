import React, { useState } from "react";

function EmployeeList() {

    const [employees] = useState([
        { Name: 'Charlie', Job: 'Janitor' },
        { Name: 'mac', Job: 'Bouncer' },
        { Name: 'Dee', Job: "Aspiring Actress" },
        { Name: 'Dennis', Job: "Bartender" }
        
    ])


    return (
        <div className="employees">
            <h3>EmployeeList</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <br/>
                        <th>Job</th>

                    </tr>
                </thead>
                <tbody>
                    {employees && employees.map(employees =>
                        <tr key={employees.Name}>
                            <td>{employees.Name}</td>
                            <br/>
                            <td>{employees.Job}</td>

                        </tr>)}
                </tbody>
            </table>
        </div>)
        ;
}

export default EmployeeList;
