import React from 'react'
import Header from '../other/Header';
import TasklistNumber from '../other/TasklistNumber';
import Tasklist from '../Tasklist/Tasklist';

const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
   
    <Header changeUser={props.changeUser} data={props.data}/>
     <TasklistNumber  data={props.data}/>
     <Tasklist  data={props.data}/> 
    
      
    </div>
  ) 
}

export default EmployeeDashboard ;