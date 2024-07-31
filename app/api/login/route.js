import { NextResponse } from "next/server"
import { User } from "@/app/models/User"
import { conn } from "@/app/db/db"
import jwt from "jsonwebtoken"
import bcryptjs from 'bcryptjs'




export const POST = async (request) => {

    const { email, password } = await request.json()

    if (!(email && password)) {

        return NextResponse.json({ compulsory: false })

    }

    const user = await User.findOne({ email })
    // console.log(user.password)

    if (!user) {
        return NextResponse.json({ exists: false })
    }

    //This part is for testing only
    // if(user){

    //     const response = NextResponse.json({
    //         user:true
    //     })
    //     response.cookies.set("token",'hgfhsdgf43#%$^%&^&*&*hhgdfhf',{
    //         httpOnly:true,
    //     })

    //     return response
    // }
    //



    if (user && await bcryptjs.compare(password, user.password)) {

        const token = await jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET)

        user.password = undefined
        const response = NextResponse.json({
            success: true,
            user
        })
        response.cookies.set("token", token, { httpOnly: true,sameSite:'none',secure:true })

        return response

    }

    return NextResponse.json({ success: false })
}