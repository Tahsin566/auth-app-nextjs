import {  NextResponse } from "next/server"

export const GET = (request,context)=>{

    const {params} = context

    console.log(params)
    
    return NextResponse.json(params)
}