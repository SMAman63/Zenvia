'use client';

import Modal from "./Modal";

import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";

const LoginModal = () =>{
    const loginModal = useLoginModal()

    const content =(
        <>
            <h2 className="mb-6 text-2xl">Welcome to Zenvia, Please login </h2>
            <form>

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
