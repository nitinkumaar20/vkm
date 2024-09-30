"use client";
import React from "react";

import { useState, useRef, FormEvent } from "react";
import { Inputitem } from "./Inputitem";
import { IoMdDoneAll } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import ClipLoader from "react-spinners/ClipLoader";

const Prayer = () => {
  const [message, setMessage] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  });
  const [success, setSuccess] = useState(true);
  const [loadershow, setLoadershow] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const data = {
    from_name: `${message.name}`,
    to_name: "Nitin kumar",
    messagdsd: message.message,
    address: message.address,
    phone: message.phone,
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    setLoadershow(true);
    emailjs
      .send("", "", data, {
        publicKey: "",
      })
      .then(
        () => {
          setSuccess(false);
          toast("Message sent successfully");
          setLoadershow(false);
        },
        (error) => {
          toast.error("FAILED: " + error.text);
          setLoadershow(false);
        }
      );
  };

  const onchange = (e: any) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer />
      <section id="Prayer" className=" py-10 max-w-[1200px] 2xl:max-w-[1440px] md:mx-auto">
        {success ? (
          <div className="lg:mx-24  shadow-md prayer-box py-5">
            <div className=" my-4 flex justify-center items-center">
              <h1 className="font-bold text-lg text-white">Prayer Request </h1>
            </div>

            <form
              className="w-full lg:grid lg:grid-cols-2 px-10 gap-4 flex flex-col"
              ref={form}
              onSubmit={sendEmail}
            >
              <Inputitem
                input="Name"
                value={message.name}
                type="text"
                id="name"
                name="name"
                onChangeData={onchange}
              />

              <Inputitem
                input="Phone No."
                value={message.phone}
                type="tel"
                id="Pno"
                name="phone"
                pattern="[0-9]{10}"
                onChangeData={onchange}
              />
<div className="lg:col-span-2">

              <Inputitem
                input="Address"
                
                value={message.address}
                type="address"
                id="address"
                name="address"
                onChangeData={onchange}
              />
</div>

              <div className="flex flex-col text-white mt-2 col-span-2">
                <label htmlFor="message" className="labl-mess">
                  Prayer in Details 
                </label>
                <textarea
                  className="text-black rounded-lg"
                  id="message"
                  cols={30}
                  rows={5}
                  placeholder="Enter message"
                  name="message"
                  value={message.message}
                  onChange={onchange}
                />
              </div>
              <div className="text-center mt-4 col-span-2">
                <button
                  className={`bg-yellow-500 px-10 py-2 text-black font-semibold hover:bg-yellow-600 hover:text-white rounded-full ${
                    loadershow ? "hidden" : ""
                  }`}
                  type="submit"
                >
                  Submit
                </button>
                <ClipLoader
                  color="#24fc03"
                  loading={loadershow}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            </form>
          </div>
        ) : (
          <div
            style={{
              padding: "0rem 10rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>Message sent successfully</h2>
            <IoMdDoneAll
              style={{
                fontSize: "5rem",
                margin: "0 1rem",
                color: "#1aff34",
              }}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default Prayer;
