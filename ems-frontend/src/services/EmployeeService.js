import axios from 'axios';

// REST API URL
const REST_API_BASE_URL = "http://localhost:8080/api/employees";


// Axios REST API methods
// for all the methods, we are using the REST_API_BASE_URL
// and we are appending the path to the URL
// for example, to get all the employees, we are using the GET method
// and we are appending the path to the URL
export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);

export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeId, employee);

export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL + '/' + employeeId);