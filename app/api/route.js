import { NextResponse } from "next/server"
import { User } from "../models/User"
import { conn } from "../db/db"


export const GET = async(request) =>{

    const user = await User.find()

    console.log(user)
    
    const response = NextResponse.json({
        user
    })

    return response

}

export const POST = async(request)=>{

    const {name} = await request.json()
    console.log(name)

    const response = NextResponse.json({
        name
    })

    return response
    

}