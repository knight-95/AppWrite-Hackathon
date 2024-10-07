import { createSessionClient } from "@/config/appwrite";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
     const sessionCookie = request.cookies.get("session");

     try {
          const { databases } = await createSessionClient(sessionCookie?.value || '');
          console.log(process.env);

          const { documents } = await databases.listDocuments(
               process.env.NEXT_PUBLIC_DATABASE_ID,
               "670333f70024a65ad245",
          );
          console.log(documents);
          return NextResponse.json(documents);
     } catch (error) {
          console.error(error);
          return NextResponse.json({ error: "Server side error" }, { status: 500 });
     }
}