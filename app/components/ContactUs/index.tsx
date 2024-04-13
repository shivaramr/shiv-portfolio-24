"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { contactMe } from "../../../public/components/data/index.json";

const ContactUs = () => {
  const { info, github, linkedin } = contactMe;
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    setLoading(true);
    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200 || resData.status === "OK") {
      e.target.email.value = "";
      e.target.subject.value = "";
      e.target.message.value = "";
      toast.success(
        "Email sent! If no response in 7 days, please follow up via phone/WhatsApp. Appreciate your attention."
      );
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Contact <span className="text-yellow-400">Me</span>
      </h1>
      <section className="grid md:grid-cols-2 py-20 gap-4 w-[80%] mx-auto items-center">
        <div>
          <h5 className="text-[25px] text-white mt-0 md:mt-[1rem] font-bold">Let`s Connect</h5>
          <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80 mb-3">{info}</p>
          <div className="socials flex flex-row gap-2">
            <Link target="_blank" href={github} rel="noopener noreferrer">
              <Image src="/images/github-icon.svg" alt="github" width={36} height={36} />
            </Link>
            <Link target="_blank" href={linkedin} rel="noopener noreferrer">
              <Image src="/images/linkedin-icon.svg" alt="linkedin" width={36} height={36} />
            </Link>
          </div>
        </div>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block text-sm mb-2 font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm block w-full p-2.5"
                placeholder="john.doe@mail.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm block w-full p-2.5"
                placeholder="Just saying hi!"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase ${
                loading ? "bg-yellow-400" : "bg-[#55e6a5]"
              } text-black flex items-center space-x-2`}
            >
              {loading ? "Loading..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
