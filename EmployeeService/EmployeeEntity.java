package EmployeeService;
// This class communicate our database or mysql;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id; // ✅ CORRECT IMPORT
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Employee")// create a database in  our mysql
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
public class EmployeeEntity {
     private long id;
    private String Department;
    private String Name;
    private String  EmailId;
    private  long phoneno;


    
}
}
