package com.myaccess.ems.mapper;

import com.myaccess.ems.dto.EmployeeDto;
import com.myaccess.ems.entity.Employee;

public class EmployeeMapper {

    public  static EmployeeDto mapToEmployeeDto(Employee employee) {
        return new EmployeeDto (
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail(),
                employee.getPosition()
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail(),
                employeeDto.getPosition()
        );
    }
}
