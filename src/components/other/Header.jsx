import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

// const Header = ({data}) => {



//   return (
//     <div className='flex items-end justify-between '>
//         <h1 className='text-2xl font-medium'>Hello {data.firstName}<br/><span className='text-3xl font-semibold '>👋</span></h1>
//         <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-md'>Log out</button>
//     </div>
//   )
// }

const Header = (props) => {
  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  // If admin, show Admin; if employee, show employee name
  const username = props.data ? props.data.firstName : "Admin";

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {username} 👋
        </span>
      </h1>
      <button 
        onClick={logoutUser} 
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm">
        Log out
      </button>
    </div>
  );
};


export default Header
