"use client";
import { signOut } from "next-auth/react";


export default function SignOutPage(){
    return(
        <div className="text-center p-4">
            <h1 className="text-2xl mb-4">
                Sign Out
            </h1>
            <button onClick ={() => signOut()}>Sign Out</button>
        </div>
    )
}