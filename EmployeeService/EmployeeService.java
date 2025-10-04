package EmployeeService;

import java.util.List;

public interface EmployeeService {
    String createEmployee(Employee employee);
    List <Employee> readEmployee();
    boolean deleteEmploye(long id);
    String readEmployee(long id);
    String updateEmployee(Employee employee ,long id);

    
} 
