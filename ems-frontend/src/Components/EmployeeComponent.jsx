import { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [position, setPosition] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { id } = useParams();

    const [errors, setErrors] = useState({
    firstName : '',
    lastName : '',
    email : '',
    position : ''
  })

  const navigator = useNavigate();

  useEffect(() => {

    if (id) {
        getEmployee(id).then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
          setPosition(response.data.position);
      }).catch(error => {
        console.error(error)
      })
    }
  }, [id])


  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if(validateForm ()) {
      setIsLoading(true);
      const employee = {firstName, lastName, email, position}
      console.log('employee => ' + JSON.stringify(employee))

      if (id) {
        updateEmployee (id, employee).then((response) => {
          console.log('Response from updateEmployee: ', response.data);
          alert('Employee updated successfully.')
          navigator('/employees');
          setIsLoading(false);
        }).catch(error => {
          console.error(error)
          setIsLoading(false);
        })
      } else {
        createEmployee(employee).then(response => {
        console.log('Response from createEmployee: ', response.data)
        alert('Employee added successfully.')
        navigator('/employees')
        setIsLoading(false);
        }).catch(error => {
          console.error(error)
          setIsLoading(false);
        })
      }
     }
    }

  function validateForm() {
    let valid = true;

    const errorsCopy = {... errors}

    if (firstName.trim()) {
      errorsCopy.firstName = ''
    } else {
      errorsCopy.firstName = 'First Name is required'
      valid = false
    }

    if (lastName.trim()) {
      errorsCopy.lastName = ''
    } else {
      errorsCopy.lastName = 'Last Name is required'
      valid = false
    }

    if (email.trim()) {
      errorsCopy.email = ''
    } else {
      errorsCopy.email = 'Email is required'
      valid = false
    }

    if (position.trim()) {
      errorsCopy.position = ''
    } else {
      errorsCopy.position = 'Position is required'
      valid = false
    }

    setErrors(errorsCopy);
    return valid;
  }
  
  function pageTitle() {
      if (id) {
      return <h2 className='text-center'>Update Employee</h2>
    } else {
      return <h2 className='text-center'>Add Employee</h2>
    }
  }

  return (
    <div className='full-page'>
      <div style={{height: '2rem'}}></div>
      <div className='container'>
        {
          pageTitle()
        }
        <form>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name</label>
                <input
                  type="text"
                  placeholder='Enter Employee First Name'
                  name='firstName'
                  value={firstName}
                  className={`input-field ${errors.firstName ? 'is-invalid' : ''}`}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && <div className='error-message'>{errors.firstName}</div>}
              </div>
            </div>

            <div className='col-md-6'>
              <div className='form-group mb-2'>
                <label className='form-label'>Last Name</label>
                <input
                  type="text"
                  placeholder='Enter Employee Last Name'
                  name='lastName'
                  value={lastName}
                  className={`input-field ${errors.lastName ? 'is-invalid' : ''}`}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && <div className='error-message'>{errors.lastName}</div>}
                </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group mb-2'>
                <label className='form-label'>Email</label>
                <input
                  type="text"
                  placeholder='Enter Employee Email'
                  name='email'
                  value={email}
                  className={`input-field ${errors.email ? 'is-invalid' : ''}`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className='error-message'>{errors.email}</div>}
              </div>
            </div>

            <div className='col-md-6'>
              <div className='form-group mb-2'>
                <label className='form-label'>Position</label>
                <input
                  type="text"
                  placeholder='Enter Employee Position'
                  name='position'
                  value={position}
                  className={`input-field ${errors.position ? 'is-invalid' : ''}`}
                  onChange={(e) => setPosition(e.target.value)}
                />
                {errors.position && <div className='error-message'>{errors.position}</div>}
              </div>
            </div>
          </div>

          <button className='btn btn-success' onClick={saveOrUpdateEmployee} disabled={isLoading}>
            {isLoading ? <><div className='spinner'></div> Saving...</> : '💾 Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default EmployeeComponent