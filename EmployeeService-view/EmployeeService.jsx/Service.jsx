import axios from 'axios'
const EMPLOYEE_S_API_BASE_URL="http://localhost:8090/Employee"
class EmployeeService{
     saveEmployee(employee){
        return axios.post( EMPLOYEE_S_API_BASE_URL,employee)
 }
 getEmployees(){
     return axios.get( EMPLOYEE_S_API_BASE_URL)
 }
 getEmployeeId(id){
    return axios.get( EMPLOYEE_S_API_BASE_URL+"/"+id)
 }

 deleteEmployeeById(id){
    return axios.delete(EMPLOYEE_S_API_BASE_URL+"/"+id);

   
 }
}
export default new EmployeeService;