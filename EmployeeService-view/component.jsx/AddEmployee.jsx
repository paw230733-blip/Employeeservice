import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from"../Service.jsx/EmployeeService"
 const AddEmployee=()=>{
    const [employee, setEmployee]= useState({
         id:"  ",
         name:"  ",
         phone:"  ",
         emailId:"  ",
         age:"  ",
    });
    
    const handleChange =(e)=>{
         const value= e.target.value;
         setEmployee({...employee,[e.target.name]:value});
    };
    const reset=(e)=>{
        e.preventDefault();
        setEmployee({
            id:"",
         name:"",
         phone:"",
         emailId:"",
         age:"",

        })
    }
    
  const saveEmployee = (e) => {
  e.preventDefault();
  EmployeeService.saveEmployee(employee)
  .then((response)=>{
     console.log( "saved",response)
     navigate("/")

  })

.catch((error)=>{

 console.log(error);
});

  }
    const navigate= useNavigate();
    return(
        <>
        <div className=" max-w-xl mx-40 bg-slate-200 my-20 rounded shadow py-4 px-8"> 
            <div  className=" text-4xl teacking wider font-bold text-center py-4 px-8">
            <p>Add Employee</p>
            </div>
        <div className=" mx-10 my-2">
    <input value={employee. name}  onChange={(e)=> handleChange(e)}  name="name" type="text" className=" w-full py-2 my-4 text-slate-1000 shadow" placeholder="name"/>
    <input value={employee. phone}  onChange={(e)=> handleChange(e)}  name="phone" type="number" className=" w-full py-2 my-4 text-slate-1000 shadow" placeholder="Phone"/>
     <input value={employee. emailId}  onChange={(e)=> handleChange(e)}  name="emailId" type="emailId" className=" w-full py-2 my-4 text-slate-1000 shadow" placeholder="emailId"/>

  <input  value={employee. age}  onChange={(e)=> handleChange(e)} name="age"  type="number"className=" w-full py-2 my-4 text-slate-1000  shadow " placeholder=" Age"/>
        </div>

        <div className=" flex my-6 space x-5 px-20">
<button  onClick={saveEmployee}className=" bg-green-400 hover:bg-green-600 py-2 px-7 mx-3 rounded"> Save</button>
<button  onClick={ reset} className=" bg-blue-400 hover:bg-blue-600 py-2 px-7 mx-3 rounded"> clear</button>
<button  onClick={()=>navigate("/")}  className=" bg-red-400 hover:bg-red-600 py-2 px-7  mx-3 rounded"> Cancel</button>


        </div>
        </div>
        </>

    )
 }
 export default AddEmployee;