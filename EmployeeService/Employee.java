package EmployeeService;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
    private long id;
    private String Department;
    private String Name;
    private String  EmailId;
    private  long phoneno;

    
}
