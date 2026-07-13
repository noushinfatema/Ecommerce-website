// import React from 'react'
// import {assets} from '../assets/assets'

// const Navbar = ({setToken}) => {
//   return (
//     <div className='flex items-center py-2 px-[4%] justify-between'>
//         <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
//         <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
//     </div>
//   )
// }

// export default Navbar


import React from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'

const Navbar = ({ setToken }) => {
  const logout = () => {
    /*
      Show notification first, then clear the token.
      Clearing the token switches the admin panel back to Login.jsx.
    */
    toast.success('Admin logged out successfully!')

    localStorage.removeItem('token')
    setToken('')
  }

  return (
    <div className='flex items-center py-2 px-[4%] justify-between bg-white'>
      <img
        className='w-[max(10%,80px)]'
        src={assets.logo}
        alt='Admin logo'
      />

      <button
        onClick={logout}
        type='button'
        className='bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full text-xs sm:text-sm hover:bg-gray-700 transition-colors'
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar