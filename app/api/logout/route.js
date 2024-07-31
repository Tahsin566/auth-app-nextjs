import { NextResponse } from "next/server"

export const GET = (request)=>{

    const response = NextResponse.json({logout:true})

    response.cookies.delete("token")
    
    return response

    
}