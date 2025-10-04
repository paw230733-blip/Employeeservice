package EmployeeService;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImp implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public String createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtile.copyProperties(employee , employeeEntity);
        employeeEntity.setId("null");
        employeeRepository.save (employeeEntity);
        return "Saved successfully"

      
    }

    @Override
    public List<Employee> readEmployee() {
  List EmployeeEntity employeesList= new EmployeeRepository.findAll();
        List <Employee> employees= new ArrayList<>();
        for (EmployeeEntity employeeEntity:employeesList ){
            Employee emp = new Employee();
            emp.setDepartment(employeeEntity.getDepartment());
            emp.setName(employeeEntity.getName());
            emp.setEmailId(employeeEntity.getId());
            emp.setPhoneno(EmployeeEntity.getPhoneno());
        }
       
    }

    @Override
    public boolean deleteEmploye(long id) {
        EmployeeEntity emp = employeeRepository.findById.getId();
        employeeRepository.delete(emp);
        return true;
    }

    @Override
    public String readEmployee(long id) {
        EmployeeEntity employeeEntity= employeeRepository.findById.getId();
        Employee employee = new employee();
        BeanUtils.copyProperties(employeeEntity , employee);
        return employee;


    }

    @Override
    public String updateEmployee(Employee employee, long id) {
       EmployeeEntity exestingEmployee= employeeRepository.findById(id).get();
    if (exestingEmployee==null){
        return "Employee not found";
    }
    exestingEmployee.setName((employee.getName()));
    exestingEmployee.setEmailId(employee.getEmailId());
    exestingEmployee.setAge((employee.getAge()));
exestingEmployee.setId((employee.getId()));
    employeeRepository.save(exestingEmployee);
return"updated successfully";
    
}
}
