'use client';

import Modal from "./Modal";

import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () =>{
    const loginModal = useLoginModal()

    const content =(
        <>
            <form className="space-y-4">
                <input placeholder="Your Email" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                
                <input placeholder="Your Password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                <div className="p-5 bg-rose-500 text-white rounded-xl opacity-80">
                    The Error
                </div>
                <CustomButton
                    label="Submit"
                    onClick={() => console.log("Login")} 
                />
            </form>
        </>
    )

    return (
        <Modal 
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
        />
    )
}

export default LoginModal

// redux 
// hooks 
// state management
// router dom
