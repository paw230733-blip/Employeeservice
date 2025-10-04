package EmployeeService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:5173/")


public class Controller {
@Autowired
private EmployeeService employeeService;

    @GetMapping("/Employee")
    public List<Employee> getAllEmployees(Employee employee){
        return EmployeeService.readEmployee();
    }
    @GetMapping("/Employee/{id}")
    public Employee getById(@PathVariable long id ){
        return employeeService.readEmployee(id);
    }
    @PostMapping("/Employee")
    public  Employee createEmployee(Employee employee){
        return employeeService.createEmployee(employee);

    }
    @DeleteMapping("/Employee/{id}")
    public boolean deleteEmploye(@PathVariable (" id") long id){
        if (employeeService.deleteEmploye(id));
        
            return "delete successfully"
        
    }
    
    
}
