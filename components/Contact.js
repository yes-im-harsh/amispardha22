import { Button } from "flowbite-react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const templeteId = process.env.NEXT_PUBLIC_TEMPLETE_ID;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const publicKey = process.env.NEXT_PUBLIC_KEY;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  console.log(serviceId, serviceId, publicKey);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${serviceId}`, `${templeteId}`, form.current, `${publicKey}`)
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent successfully");
          toast.success("Message sent successfully", { autoClose: 3000 });
          setTimeout(() => {
            setEmail("");
            setName("");
            setMessage("");
          }, 4000);

          // setTimeout(() => {
          //   window.location.reload();
          // }, 4000);
          // ;
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong", { autoClose: 3000 });
        }
      );
  };
  return (
    // <section className="bg-white dark:bg-gray-900">
    //   <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    //     <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#1A56DB] dark:text-white">
    //       Contact Us
    //     </h2>
    //     <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
    //       Got any questions? We&apos;d love to hear from you. Send us a message
    //       and we will respond as soon as possible.
    //     </p>
    //     <form ref={form} onSubmit={sendEmail} className="space-y-8">
    //       <div>
    //         <label
    //           htmlFor="email"
    //           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //         >
    //           Your email
    //         </label>
    //         <input
    //           type="email"
    //           id="email"
    //           value={email}
    //           name="user_email"
    //           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
    //           placeholder="name@gmail.com"
    //           onChange={(e) => setEmail(e.target.value)}
    //           required
    //         />
    //       </div>
    //       <div>
    //         <label
    //           htmlFor="subject"
    //           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //         >
    //           Subject
    //         </label>
    //         <input
    //           type="text"
    //           id="subject"
    //           value={subject}
    //           name="user_subject"
    //           className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
    //           placeholder="Let us know how we can help you"
    //           onChange={(e) => setSubject(e.target.value)}
    //           required
    //         />
    //       </div>
    //       <div className="sm:col-span-2">
    //         <label
    //           htmlFor="message"
    //           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    //         >
    //           Your message
    //         </label>
    //         <textarea
    //           id="message"
    //           name="user_message"
    //           rows="6"
    //           value={message}
    //           className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    //           placeholder="Leave a comment..."
    //           onChange={(e) => setMessage(e.target.value)}
    //         ></textarea>
    //       </div>
    //       <Button type="submit">Send message</Button>
    //     </form>
    //   </div>
    // </section>

    <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold text-[#1A56DB]">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-9 h-9 md:w-7 md:h-10 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                Police Station, Bailey Rd, near Rupaspur, Rupaspur, Kaliket
                Nagar, Patna, Bihar 801503
              </span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>9155869000 | 7992207980</span>
            </p>

            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>amispardha2@gmail.com</span>
            </p>
          </div>
        </div>
        <form
          novalidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              name="user_name"
              onChange={(e) => setName(e.target.value)}
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              placeholder="name@gmail.com"
              value={email}
              name="user_email"
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows="3"
              placeholder="Let us know how we can help you"
              value={message}
              name="user_message"
              onChange={(e) => setMessage(e.target.value)}
              className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"
            ></textarea>
          </label>
          {/* <button
            type="button"
            className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400"
          >
            Submit
          </button> */}
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
