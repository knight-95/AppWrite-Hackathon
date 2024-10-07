import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
     const user = false;

     if (!user && request.url.indexOf('/auth') === -1 || request.url.indexOf('/api') === -1) {
          console.log("User is not logged in");

          const response = NextResponse.redirect(new URL("/auth/login", request.url), {
               status: 303,
          });
          response.headers.set("x-middleware-cache", "no-cache");
          return response;
     }
     return NextResponse.next();
}

export const config = {
     matcher: ['/']
};