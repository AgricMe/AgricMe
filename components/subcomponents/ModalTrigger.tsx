"use client";
import React from "react";
import {ModalTrigger, Modal } from "./Modal";

export default function LoginModalElements() {
  return (
    <div className="">
        <Modal>
            <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn green-btn py-3 px-6 rounded-lg">
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Get Started
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20 yellow-btn">
                Join Us
            </div>
            </ModalTrigger>
        </Modal>
    </div>
  );
}

