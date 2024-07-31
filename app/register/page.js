"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const Register = () => {

  const navigate = useRouter()

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const info = {
    name,
    email,
    password
  }


  const handleregister =()=>{

    fetch('https://auth-app-nextjs-sigma.vercel.app/api/register',
    {
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(info)
    }
    ).then(res=>res.json()).then(data=>{
      console.log(data)
      
      
      if(data.success){
        navigate.replace('/')
      }
      else if(data.exists){
        navigate.replace('/')
      }
      
    })
  }

  return (
    <>
      <div className="bg-slate-400 min-h-[100vh] h-[100vh] box-border p-[12px] flex justify-center items-center">

        <div className="max-w-[580px] w-[550px] h-[60%] border-[1px] bg-[rgba(255,255,255,0.1)] border-[rgba(0,0,0,0.2)] rounded-[5px] flex justify-center items-center flex-col gap-[10px]">
          <h1 className="font-bold text-[19px]">Register</h1>
          <div>
            <input type="text" className="border-[1px] border-black p-[5px] rounded-[5px]" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Name'/>
          </div>
          <div>
            <input type="text" className="border-[1px] border-black p-[5px] rounded-[5px]" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='Email'/>
          </div>
          <div>
            <input type="password" className="border-[1px] border-black p-[5px] rounded-[5px]" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Password'/>
          </div>
          <button onClick={handleregister} className="p-[5px] w-[150px] bg-indigo-500 text-white rounded-[5px]">Register</button>
          <button className="p-[5px] w-[150px] bg-indigo-500 text-white rounded-[5px]"><Link href="/">Login</Link></button>
        </div>

      </div>
    </>
  )
}

export default Register