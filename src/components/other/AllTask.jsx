import React, { useContext } from 'react'
import { AuthContext } from '../../context/Authprovider'   // adjust path


const AllTask = () => {
    
const [userData] = useContext(AuthContext)   // ✅ context से data ले रहे हैं

  if (!userData) {
    return <div className='text-gray-400'>Loading tasks...</div>  // ✅ null safe
  }




  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-48'>
      <div className=' mb-2 py-2 px-4 flex justify-between rounded'>
     <h3 className='w-1/5 bg-black-300'>Employee</h3>
     <h2 className='w-1/5 bg-black-300' >Active  Task</h2>
     <h5 className='w-1/5 bg-black-300'>New Task</h5>
     <h5 className='w-1/5 bg-black-300'>Completed</h5>
     <h5 className='w-1/5 bg-black-300'>Failed</h5>
     </div>
     <div className='h-[80%] overflow-auto'>
     {userData.map(function(elem,idx){
          return  <div key={idx} className='bg-blue-300 mb-2 py-2 px-4 flex justify-between rounded'>
     <h2 className='text-lg font-bold text-orange-700 w-1/5 bg-black-300' >{elem.firstName}</h2>
     <h3 className='text-lg font-bold text-orange-700 w-1/5 bg-black-300'>{elem.taskCount.active}</h3>
     <h5 className='text-lg font-bold text-orange-700 w-1/5 bg-black-300'>{elem.taskCount.newTask}</h5>
     <h5 className='text-lg font-bold text-orange-700 w-1/5 bg-black-300'>{elem.taskCount.completed}</h5>
     <h5 className='text-lg font-bold text-orange-700 w-1/5 bg-black-300'>{elem.taskCount.failed}</h5>
     </div>
     })}
     </div>
      
     </div>
  )
}

export default AllTask
{/* <div className='bg-yellow-400 mb-2 py-2 px-4 flex justify-between rounded'>
     <h2> Ritesh</h2>
     <h3> Make a UI </h3>
     <h5> Status</h5>
     </div>
      <div className='bg-blue-400 mb-2 py-2 px-4 flex justify-between rounded'>
     <h2> Ritesh</h2>
     <h3> Make a UI </h3>
     <h5> Status</h5>
     </div>
      <div className='bg-purple-400 mb-2 py-2 px-4 flex justify-between rounded'>
     <h2> Ritesh</h2>
     <h3> Make a UI </h3>
     <h5> Status</h5>
     </div> */}