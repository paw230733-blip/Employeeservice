import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../Service.jsx/EmployeeService";

const EmployeeList=()=>{
  const  navigate= useNavigate();
  const [ employees , setEmployees]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    const fetchData = async ()=>{
       setLoading(true);
       try{
        const response= await EmployeeService.getEmployees();
        setEmployees(response.data);
       }
       catch(eror){
        console.log(eror);
       }
       setLoading(false);
      };
      fetchData();
},
[]);
 const deleteEmployee = (e,id) => {
  e.preventDefault();
  EmployeeService.deleteEmployeeById(id)
  .then(( )=>{
     if (employees){
      setEmployees((prevElement)=>{
        return prevElement.filter((employee)=>employee.id !==id );
      })
     }

  })


}
    
     return (
         <>
 <div className=' container mx-auto my-8'> 
    <div>
    <button onClick={()=>navigate("/addEmployee")} className=' bg-slate-600 hover:bg-blue-700  my-12 font-semibold px-20 py-2  rounded '> Add Employee</button>
     </div>

    <div>
      <table className=' shadow'>
        <thead  className='bg-slate-100'>
          <tr>
       <th className='  px-6 py-3 uppercase tracking-wide'>  Name</th>
       
       <th className='  px-6 py-3 uppercase tracking-wide'> Phone   </th>
       <th className=' px-6 py-3  uppercase tracking-wide'>   EmailId </th>
        <th className='  px-6 py-3 uppercase tracking-wide'>  Age</th>
         <th className=' px-6 py-3  uppercase tracking-wide'>   Action</th>
       </tr>
       </thead>

       {!loading && (
       <tbody>
        {employees.map((employee)=>(
        <tr  key={employee.id}className=' hover:bg-white hover:text-black-1000'>
         <td className='  text-left px-6 py-4   whitespace-nowrap'> {employee.name}</td>
          <td className='  text-left px-6 py-4   whitespace-nowrap'> {employee.phone}</td>
           <td className='  text-left px-6 py-4  whitespace-nowrap'> {employee.emailId}</td>
            <td className='  text-left px-6 py-4 whitespace-nowrap'> {employee.age}</td>
           <td className='  text-left px-6 py-4 whitespace-nowrap'><a> Edit</a> <a className="bg-color-gray  hover:text-black" onClick={(e)=>deleteEmployee(e,employee.id)}> Delete</a></td>
           </tr>
        ))}
        
       </tbody>
       
      )}
     </table>
   </div>
 </div>


         </>
     );

};
export default EmployeeList;