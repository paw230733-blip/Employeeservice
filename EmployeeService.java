import java.util.List;

public interface EmployeeService {

      String createEmployee (Employee employee);
      List <Employee> readEmployee();
      boolean deleteEmployee(long id);
      Employee readEmployee(long id);
      String updateEmployee(Employee employee, long id);

}
