
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor


public class Employee{
    private long Id;
    private String Depertment;
    private String Name;
    private String EmailId;
    private double phoneNo;
}