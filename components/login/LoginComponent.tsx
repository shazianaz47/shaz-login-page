"use client";


import {signIn} from "next-auth/react";

export default function SignInPage(){
    return(
        <div className="text-center p-4">
            <h1 className="text-2xl mb-4">
                sign In
            </h1>
            <button onClick={() => signIn('github')}>LogIn in with Github </button>
        </div>
    );
}



