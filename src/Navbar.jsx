import React, { useState } from 'react'

function Navbar() {
const [count,setCount]=useState(0)

  const addition =()=>{
setCount(count+1)
  }
  const substraction =()=>{
    setCount(count-1)
      }
      const restart =()=>{
        setCount(0)
          }

  return (
    <>
    <h1 className='text-7xl font-semibold  text-center'>{count}</h1>
    <div className='text-center'>
    <button className='px-4 py-2 rounded-lg bg-green-800 m-2 text-white' onClick={addition}>Add</button>
    <button className='px-4 py-2 rounded-lg bg-blue-800 m-2 text-white' onClick={substraction}>subtract</button>
    <button className='px-4 py-2 rounded-lg bg-red-800 m-2 text-white' onClick={restart}>start</button>
    </div>


    </>
  )
}

export default Navbar