import React from 'react'
import {FiSearch} from 'react-icons/fi'
const Form = ({search, setSearch}) => {
  return (
    <form action="" className='flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center'>
            <FiSearch className='text-[#97A3CD]' />
            <input type="text" name="" id="" className='my-5 w-[200px] bg-[#E2F1F9] outline-none' placeholder='Find people you know' onChange={e => {setSearch(e.target.value)}} value={search} />
            </div>
            <div className='w-[250px] h-[.1rem] bg-[#7D5BF0] mt-[-10px] mb-5'></div>
        </form>
  )
}

export default Form