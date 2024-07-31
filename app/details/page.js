"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect ,useState} from 'react'



const Details = () => {


    useEffect(()=>{
        
        let person = localStorage.getItem("user")
        person = JSON.parse(person)
        // console.log(person)

    },[])
    
    
    
    
    const router = useRouter()

    const [info, setinfo] = useState({name:"",age:"",email:""})
    
    
    useEffect(()=>{
        fetch('/api/dashboard').then(res=>res.json()).then(data=>{
            if(!data.found || data.expired){
                setinfo({name:"",age:"",email:""})
                router.replace('/')
            }
            if(data.found){
                setinfo({name:person.name,age:24,email:person.email})
            }
            
        })
    },[])



    const handleout = ()=>{
        fetch('/api/logout').then(res=>res.json()).then(data=>{
            if(data.logout){
                localStorage.removeItem("user")
                let per = localStorage.getItem("user")
                console.log(per)
                
                router.replace('/')
            }
        }
        )
    }
    return <>
        <div className="bg-slate-400 min-h-[100vh] h-[100vh] box-border p-[12px] flex justify-center items-center">

            <div className="max-w-[580px] w-[550px] h-[60%] border-[1px] bg-[rgba(255,255,255,0.1)] border-[rgba(0,0,0,0.2)] rounded-[5px] flex justify-center items-center flex-col gap-[10px]">

                <h1 className='font-bold text-[18px]'>User Details</h1>

                <p>Name : {info?.name}</p>
                <p>Age : 24</p>
                <p>Email : {info?.email}</p>


                <button className="p-[5px] w-[150px] bg-indigo-500 text-white rounded-[5px]" onClick={handleout}>Sign out</button>
            </div>
        </div>
    </>

}

export default Details