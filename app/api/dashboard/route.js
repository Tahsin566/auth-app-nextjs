import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken'


export const GET = async (request) => {

    const token = request.cookies.get("token")?.value
    // console.log(token)

    if (!token) {
        return NextResponse.json({ found: false })
    }
    try{

        let x = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        return NextResponse.json({found:true})

    }
    catch{
        return NextResponse.json({expired:true})
    }
    

    

}