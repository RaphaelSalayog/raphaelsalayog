import { useState } from "react";

import iconAddress from "@/assets/icons/address-icon.svg";
import iconCall from "@/assets/icons/call-icon.svg";
import iconFacebook from "@/assets/icons/facebook-icon.svg";
import iconLinkedin from "@/assets/icons/linkedin-icon.svg";
import iconMail from "@/assets/icons/mail-icon.svg";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setIsFormSubmit } from "@/store/reducers/buttonSlice";
import { useInView } from "react-intersection-observer";

const ContactContent = () => {
  const [ref, view] = useInView({ threshold: 0.4, triggerOnce: true });
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const messageHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(`${name} ${email} ${message}`);
    dispatch(setIsFormSubmit());
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <section
        id="contact"
        className="relative flex justify-center items-center min-h-screen overflow-hidden"
      >
        <div
          ref={ref}
          className="grid grid-cols-3 h-auto w-[60%] shadow-2xl max-w-[1110px] min-w-[304px] | max-2xl:w-[80%] | max-md:grid-rows-5 max-md:grid-cols-1 max-md:h-[830px] max-md:w-[60%] | max-[642px]:w-[70%] | max-[642px]:w-[95%] | max-[375px]:grid-rows-5"
        >
          <div className="flex flex-col justify-center bg-[#0b0a14] p-10 text-left rounded-tl-lg rounded-bl-lg | max-lg:p-8 | max-md:row-span-2 max-md:rounded-bl-sm max-md:rounded-tr-lg | max-[375px]:row-span-2 max-[375px]:p-6">
            <div
              className={`${view && "animate-fade-left-to-right-content1"} ${
                !view && "opacity-0"
              }`}
            >
              <h2 className="text-justify mb-6 | max-lg:mb-4">
                Feel free to reach out to discuss job opportunity,
                collaboration, or for any inquiries. I'm looking forward to
                connecting with you.
              </h2>
              <h1 className="text-4xl mb-4 | max-lg:text-3xl max-lg:mb-2">
                Contact Me
              </h1>
              <div className="flex items-center mb-2">
                <img
                  src={iconCall.src}
                  alt="Icon Phone"
                  loading="lazy"
                  className="flex h-[2.5rem] mr-[5px]"
                />
                <p>{`(+63) 945 147 2698`}</p>
              </div>
              <div className="flex items-center">
                <img
                  src={iconAddress.src}
                  alt="Icon Address"
                  loading="lazy"
                  className="h-[2.5rem] mr-[5px]"
                />
                <p>{`San Jose del Monte, Bulacan`}</p>
              </div>
              <hr className="border border-1 my-5 | max-lg:my-3" />
            </div>
            <div
              className={`${
                view && "animate-fade-bottom-to-top-content2"
              } flex items-center justify-around ${!view && "opacity-0"}`}
            >
              <Link
                href="https://mail.google.com/mail/u/0/?to=rsalayog0199@gmail.com&fs=1&tf=cm"
                target="_blank"
              >
                <img
                  src={iconMail.src}
                  alt="Icon Email"
                  loading="lazy"
                  className="w-[2.5rem] hover:scale-125 duration-300"
                />
              </Link>
              <Link
                href="https://www.facebook.com/raphael.salayog"
                target="_blank"
              >
                <img
                  src={iconFacebook.src}
                  alt="Icon Facebook"
                  loading="lazy"
                  className="w-[2.5rem] hover:scale-125 duration-300"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/rsalayog?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <img
                  src={iconLinkedin.src}
                  alt="Icon LinkedIn"
                  loading="lazy"
                  className="w-[2.5rem] hover:scale-125 duration-300"
                />
              </Link>
            </div>
          </div>

          <div className="col-span-2 | max-md:row-span-3 | max-[375px]:row-span-3">
            <form
              onSubmit={submitHandler}
              className="flex flex-col justify-center bg-[#FFCE67] p-10 text-black h-full rounded-tr-lg rounded-br-lg | max-lg:p-8 | max-md:rounded-tr-sm max-md:rounded-bl-lg | max-[375px]:p-6"
            >
              <div className="mb-3">
                <input
                  type="name"
                  id="name"
                  value={name}
                  required
                  placeholder="Name"
                  onChange={nameHandler}
                  className="p-2 rounded-sm w-full"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  id="email"
                  value={email}
                  required
                  placeholder="Email"
                  onChange={emailHandler}
                  className="p-2 rounded-sm w-full"
                />
              </div>
              <div className="mb-3 h-[57%]">
                <textarea
                  id="message"
                  value={message}
                  required
                  placeholder="Message"
                  onChange={messageHandler}
                  className="resize-none p-2 rounded-sm w-full h-[100%]"
                />
              </div>
              <button className="block bg-[#eb4a4a] text-white font-inherit font-semibold py-2 px-4 hover:bg-[#d94645]">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactContent;
