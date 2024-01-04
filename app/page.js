"use client"
import React, { Fragment, useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e)=>{
      e.preventDefault()
      setmainTask([...mainTask, {title, desc}])
      settitle("")
      setdesc("")
      console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }
  
  let renderTask = <h2>No task Available</h2>
  
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return <li key={i} className='flex items-center justify-between m-5'>
        <div className='flex items-center justify-between w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button
        onClick={()=>{
          deleteHandler(i)
        }}
        className='bg-red-500 rounded font-bold px-4 py-2 text-white'>Delete</button>
      </li>
    })
  }

  return (
    <Fragment>

      <h1 className='bg-black text-white p-6 text-3xl text-center font-bold'>Rohit's Todo List</h1>

      <form onSubmit={submitHandler}>
        <input type="text" 
        placeholder='Enter Title here' 
        className='text-2xl border-zinc-800 border-4 m-5 py-2 px-1'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        />

        <input type="text" 
        placeholder='Enter Description  here' 
        className='text-2xl border-zinc-800 border-4 m-5 py-2 px-1'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}
        />

        <button className='bg-black text-white text-2xl rounded font-bold px-4 py-3 m-5'>Add task</button>
      </form>

      <hr/>

      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>

    </Fragment>
  )
}

export default page