'use client';

import Modal from "./Modal";

import { useState } from "react";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () =>{
    const signupModal = useSignupModal()

    const content =(
        <>
            <form className="space-y-4">
                <input placeholder="Your Email" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                
                <input placeholder="Your Password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                <input placeholder="Repeat Password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                <div className="p-5 bg-rose-500 text-white rounded-xl opacity-80">
                    The Error
                </div>
                <CustomButton
                    label="Submit"
                    onClick={() => console.log("Signup")} 
                />
            </form>
        </>
    )

    return (
        <Modal 
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Signup"
            content={content}
        />
    )
}

export default SignupModal

// redux 
// hooks 
// state management
// router dom
