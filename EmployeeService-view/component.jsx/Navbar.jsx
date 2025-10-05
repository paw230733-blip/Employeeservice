const Navbar=()=>{
     return(
        <>  
        <div className=" bg-slate-80 h-16 px-16  items-center flex border">
  <h1 className=' text- 4xl text- blod  text-green-500'>  EM Service</h1>

  <div className=' space-x-4 ml-auto'>
      <a href='/'  className=' hover:text-blue-400'> Home</a>
  <a href='/' className=' hover:text-blue-400'> Profile</a>
  <a href='/'className=' hover:text-blue-400'>Logout</a> 

   </div>
   </div>
        
        
        </>
     );
} ;
export default Navbar;