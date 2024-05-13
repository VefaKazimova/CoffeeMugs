import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const SignPage = () => {
  const form = useRef();
  const sendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pz8bpz2", "template_0i5nqww", form.current, {
        publicKey: "etrxbw7cXmKXvrtCZ",
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="pl-[2%] pr-[2%] pt-[6%]">
      <div className="bg-[#1D1F2E] text-white pt-[6%] pb-[6%]">
        <div className="flex flex-col justify-center items-center">
          <h5 className="font-normal text-[12px] leading-[18px] tracking-[2px] uppercase">
            Sign up and get free coffee bags
          </h5>
          <h1 className="font-normal text-[36px] leading-[50px] pt-3">
            Coffee Updates
          </h1>
          <form
            ref={form}
            onSubmit={sendMessage}
            className="w-[90%] flex flex-col mt-6 lg:flex md:flex gap-y-5 text-center"
          >
            <label>Name</label>
            <input
              name="name"
              type="text"
              style={{
                backgroundColor: "transparent",
                width: "100%",
                padding: "10px 10px",
                border: "1px solid gray",
                borderRadius: "4px",
              }}
              placeholder="Enter your message here"
            />
            <label>Email</label>
            <input
              name="email"
              type="email"
              style={{
                backgroundColor: "transparent",
                width: "100%",
                padding: "10px 10px",
                border: "1px solid gray",
                borderRadius: "4px",
              }}
              placeholder="Enter your message here"
            />
            <label>Message</label>
            <input
              name="message"
              type="text"
              style={{
                backgroundColor: "transparent",
                width: "100%",
                padding: "10px 10px",
                border: "1px solid gray",
                borderRadius: "4px",
              }}
              placeholder="Enter your message here"
            />
            <button
              type="submit"
              className="rounded-sm font-normal text-[12px] leading-[18px] tracking-[2px] uppercase bg-[white] text-[black] py-[13px] px-[25px]"
            >
              subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignPage;
