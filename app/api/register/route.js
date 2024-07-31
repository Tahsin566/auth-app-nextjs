import { User } from "@/app/models/User"
import { NextResponse } from "next/server"
import bcryptjs from 'bcryptjs'
import { conn } from "@/app/db/db"




export const POST = async(request)=>{

    const {name,email,password} = await request.json()

    console.log(name)
    console.log(email)
    console.log(password)
    
    

    if(!(name && email && password)){

        return NextResponse.json({compulsory:false})
    }

    const user = await User.findOne({email})

    if(user){
        return NextResponse.json({exists:true})
    }

    const hashpassword = await bcryptjs.hash(password,10)

    const person = await User.create({
        name,
        email,
        password:hashpassword
    })
    
    await person.save()

    person.password = undefined
    const response = NextResponse.json({
        person,
        success:true
    })
    
    return response
    
}