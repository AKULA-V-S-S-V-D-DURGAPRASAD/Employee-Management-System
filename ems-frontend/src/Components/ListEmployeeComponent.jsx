import {useEffect, useState} from 'react'
import { listEmployees, deleteEmployee} from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

const [employees, setEmployees] = useState([])
const [searchTerm, setSearchTerm] = useState('')

const navigator = useNavigate();

useEffect(() => {
getAllEmployees();
} , [])

function getAllEmployees(){
listEmployees().then((response) => {
setEmployees(response.data)
}).catch(error => {  
console.error(error)
})
}

function addNewEmployee(){
navigator('/add-employee')
}

function updateEmployee(id){
navigator(`/edit-employee/${id}`)
}

function removeEmployee(id){
console.log('Employee Id: ', id)

if (window.confirm('Are you sure you want to delete this employee?')) {
  deleteEmployee(id).then((response) => {
  getAllEmployees();
  console.log('Response from deleteEmployee: ', response.data)
  alert('Employee deleted successfully.')
  navigator('/employees')
  }).catch(error => {
  console.error(error)
  }
  )
}
}

return (
<div className='container'>
<div className='container'>
<h2 className='text-center'>List of Employees</h2>
<div className='flex-between mb-3'>
  <button className='btn btn-primary' onClick={addNewEmployee}>➕ Add Employee</button>
  <input
    type='text'
    placeholder='Search by name...'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className='input-field w-50'
  />
</div>
<div className='table-responsive'>
<table className='table'>
<thead>
    <tr>
        <th>Employee Id</th>
        <th>Employee First Name</th>
        <th>Employee Last Name</th>
        <th>Employee Email Id</th>
        <th>Employee Position</th>
        <th>Actions</th>
    </tr>
</thead>
<tbody>
    {
        employees.filter(employee =>
            employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        ).map(employee => (
            <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.position}</td>
                <td>
                    <div className='flex flex-column flex-md-row gap-2'>
                        <button className='btn btn-info btn-sm' onClick={() => updateEmployee(employee.id)}>✏️ Update</button>
                        <button className='btn btn-danger btn-sm' onClick={() => removeEmployee(employee.id)}>
                            🗑️ Delete
                        </button>
                    </div>
                </td>
            </tr>
        ))
    }
</tbody>
</table>
</div>
</div>
</div>
)
}

export default ListEmployeeComponent