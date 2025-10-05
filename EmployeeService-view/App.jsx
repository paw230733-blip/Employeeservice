import image from './image/mountains.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter ,Routes, Route}from 'react-router-dom';
import Navbar from './Component.jsx/Navbar';
import EmployeeList from './Component.jsx/EmployeeList';
import AddEmployee from './Component.jsx/AddEmployee';
function App() {


  return (
    <>
    <BrowserRouter>
 
<Navbar/>
<Routes>
  <Route  index element={<EmployeeList/>}/>
 <Route path='/'element ={<EmployeeList/>}/>
  <Route path='/addEmployee' element={<AddEmployee/>}/>
  </Routes>
</BrowserRouter>
  </>
  )
}

export default App;