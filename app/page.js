"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect,useState } from "react";


export default function Home() {

  const navigate = useRouter()

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const info = {
    email,
    password
  }

  useEffect(()=>{
    fetch('/api/dashboard').then(res=>res.json()).then(data=>{
      console.log(data)
      
        if(!data.found || data.expired){  
            navigate.replace('/')
        }
        if(data.found){
          navigate.replace('/details')
        }
        
    })
},[])

  const handlelogin = ()=>{

    fetch('/api/login',{
      method:"POST",
      headers:{

        'Content-Type':'application/json'
      },
      body:JSON.stringify(info)
    }).then(res=>res.json()).then(data=>{
      
      if(data.success){
        localStorage.setItem("user",JSON.stringify(data.user))
        navigate.replace('/details')
      }
      
    })
  }
  
  
  return <>
    <div className="bg-slate-400 min-h-[100vh] h-[100vh] box-border p-[12px] flex justify-center items-center">

      <div className="max-w-[580px] w-[550px] h-[60%] border-[1px] bg-[rgba(255,255,255,0.1)] border-[rgba(0,0,0,0.2)] rounded-[5px] flex justify-center items-center flex-col gap-[10px]">
        <h1 className="font-bold text-[19px]">Login</h1>
        <div>
          <input type="text" className="border-[1px] border-black p-[5px] rounded-[5px]" onChange={e=>{setemail(e.target.value)}} placeholder="Email"/>
        </div>
        <div>
          <input type="password" className="border-[1px] border-black p-[5px] rounded-[5px]" onChange={e=>setpassword(e.target.value)} placeholder="Password"/>
        </div>
        <button onClick={handlelogin} className="p-[5px] w-[150px] bg-indigo-500 text-white rounded-[5px]">Log in</button>
        <h1>New user? <a href="/register">Register</a></h1>
        {/* <button className="p-[5px] w-[150px] bg-indigo-500 text-white rounded-[5px]" onClick={{}}>Click to set token in cookie</button> */}
        {/* <button className="p-[5px] w-[150px] bg-indigo-500 text-white rounded-[5px]" onClick={{}}>Check for token</button> */}
      </div>

    </div>
  </>
}
