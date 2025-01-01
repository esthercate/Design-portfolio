"use client";

import { ContactCard } from "../common/styles";
import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const ContactForm = (props: Props) => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ky36wxk", "template_lv220qw", form.current!, {
        publicKey: "Io2rLntQxWhiWXI_4",
      })
      .then(
        () => {
          toast.success("Message Sent successfully!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          });
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          toast.error("Failed to send message");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <ContactCard className="flex flex-col px-4 py-3">
      <div className="w-full text-center">
        <h4>Contact me!</h4>
      </div>
      <form
        ref={form}
        className="flex flex-col py-4 gap-2"
        onSubmit={sendEmail}
      >
        <input
          type="text"
          placeholder="Name"
          name="from_name"
          className="border-b border-gray-300 mb-4 bg-bg-gray focus:outline-none"
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="from_email"
          className="border-b border-gray-300 mb-4 bg-bg-gray focus:outline-none"
          required
        />
        <textarea
          placeholder="Message"
          name="message"
          className="border-b border-gray-300 mb-4 bg-bg-gray focus:outline-none"
          rows={2}
          required
        />
        <input
          type="submit"
          value="Send"
          className="py-2 px-4 border-2 border-orange m-auto rounded-lg flex justify-center items-center mt-3 text-orange hover:text-white cursor-pointer"
        />
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </ContactCard>
  );
};

export default ContactForm;
