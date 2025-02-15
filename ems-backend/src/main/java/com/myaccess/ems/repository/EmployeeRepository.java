package com.myaccess.ems.repository;

import com.myaccess.ems.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
