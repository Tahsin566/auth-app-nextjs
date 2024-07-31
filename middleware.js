
import { headers } from "next/headers"
import { NextResponse } from "next/server"

export const middleware = async(request) => {


    // let path = request.nextUrl.pathname
    
    
    return NextResponse.next({g:2})


    // if(path == '/about'){
        // return NextResponse.redirect(new URL('/', request.url))
   // }

}

// export const config = {
//     matcher: ['/contact', '/about'] 
//     //Middleware works only on this paths.By default middleware is applied to all paths,if this config was not given(be it server or client side doesn't matter to middleware,it executes in absence of config)
// }