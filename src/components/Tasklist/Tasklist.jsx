// import React,{useContext} from 'react'
// import AcceptTask from './AcceptTask'
// import NewTask from './NewTask'
// import CompleteTask from './CompleteTask'
// import FailedTask from './FailedTask'
// import { AuthContext } from '../../context/Authprovider'
// const Tasklist = ({data}) => {



//   return (
//     <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 b mt-10' >
//     {data?.tasks?.map((elem, index) => {
//   if (elem.active) {
//     return <AcceptTask key={index} data={elem} /> 
//   }
//   if (elem.newTask) {
//     return <NewTask key={index} data={elem} />
//   }
//   if (elem.completed) {
//     return <CompleteTask key={index} data={elem} />
//   }
//   if (elem.failed) {
//     return <FailedTask key={index} data={elem} />
//   }
//   return null
// })}

//       <div className='flex-shrink-0 h-full w-[330px] p-5 bg-red-400 rounded-xl '>
//      <div className='flex justify-betwwen'>
//         <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
//         <h4 className='text-sm'>15 Aug 2025</h4>
//       </div>
//       <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
//       <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quibusdam repudiandae architecto dicta? Magnam, perferendis!</p>
//      </div>
//      <div className='flex-shrink-0 h-full w-[330px] p-5 bg-orange-400 rounded-xl '>
//      <div className='flex justify-betwwen'>
//         <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
//         <h4 className='text-sm'>15 Aug 2025</h4>
//       </div>
//       <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
//       <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quibusdam repudiandae architecto dicta? Magnam, perferendis!</p>
//      </div> 
//      {/* <div className='flex-shrink-0 h-full w-[330px] bg-pink-400 rounded-xl '>

//      </div>
//      <div className='flex-shrink-0 h-full w-[330px] bg-pink-400 rounded-xl '>

//      </div> */}
//     </div>
//   )
// }

// export default Tasklist


import React, { useContext } from 'react'
import { AuthContext } from '../../context/Authprovider'

const Tasklist = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext)

  const updateTaskStatus = (taskIndex, status) => {
    const updatedUsers = [...userData]

    // find employee
    const employeeIndex = updatedUsers.findIndex(u => u.id === data.id)
    if (employeeIndex !== -1) {
      const employee = updatedUsers[employeeIndex]

      // update task
      let task = employee.tasks[taskIndex]

      // reset all status first
      task.active = false
      task.newTask = false
      task.completed = false
      task.failed = false

      // set new status
      if (status === "active") task.active = true
      if (status === "completed") task.completed = true
      if (status === "failed") task.failed = true

      // update counts
      employee.taskCount.active = employee.tasks.filter(t => t.active).length
      employee.taskCount.newTask = employee.tasks.filter(t => t.newTask).length
      employee.taskCount.completed = employee.tasks.filter(t => t.completed).length
      employee.taskCount.failed = employee.tasks.filter(t => t.failed).length
    }

    setUserData(updatedUsers)
  }

//   return (
//     <div className="space-y-3">
//       {data.tasks.map((task, index) => (
//         <div key={index} className=" bg-black text-white p-3 rounded flex justify-between items-center overflow-y-auto">
//           <div>
//             <h3 className="font-semibold">{task.taskTitle}</h3>
//             <p className="text-sm">{task.taskDescription}</p>
//           </div>
//         <div className="flex justify-between items-center w-full h-20 overflow-y-auto">
//   {/* Left - Accept */}
//   <button 
//     onClick={() => updateTaskStatus(index, "active")} 
//     className="px-3 py-1 bg-blue-500 rounded text-sm">
//     Accept
//   </button>

//   {/* Middle - Complete */}
//   <button 
//     onClick={() => updateTaskStatus(index, "completed")} 
//     className="px-3 py-1 bg-green-500 rounded text-sm">
//     Complete
//   </button>

//   {/* Right - Failed */}
//   <button 
//     onClick={() => updateTaskStatus(index, "failed")} 
//     className="px-3 py-1 bg-red-500 rounded text-sm">
//     Fail
//   </button>
// </div>

//         </div>
//       ))}
//     </div>
//   )
// }

return (
  <div className="space-y-3">
    {(!data.tasks || data.tasks.length === 0) ? (
      <p className="text-gray-400">No tasks assigned yet.</p>
    ) : (
      data.tasks.map((task, index) => (
        <div key={index} className=" bg-black text-white p-3 rounded flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{task.taskTitle}</h3>
            <p className="text-sm">{task.taskDescription}</p>
          </div>

          {/* Show actions */}
          <div className="flex justify-between items-center w-full">
            <button 
              onClick={() => updateTaskStatus(index, "active")} 
              className="px-3 py-1 bg-blue-500 rounded text-sm">
              Accept
            </button>
            <button 
              onClick={() => updateTaskStatus(index, "completed")} 
              className="px-3 py-1 bg-green-500 rounded text-sm">
              Complete
            </button>
            <button 
              onClick={() => updateTaskStatus(index, "failed")} 
              className="px-3 py-1 bg-red-500 rounded text-sm">
              Fail
            </button>
          </div>
        </div>
      ))
    )}
  </div>
)}

export default Tasklist
