import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import bobas from "../SiteImg/bulk order bbt.png";
import "./ContactUs.css";
import ContactConfirmation from "./ContactConfirmation";
import { AnimatePresence } from "framer-motion";
//api

export const Contact = () => {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [messageOptional, setMessageOptional] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const sent = () => {
    setEmailSent(!emailSent);
  };

  //fetch
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_iyih0jt",
    //     "template_9mcw1oi",
    //     form.current,
    //     "pWK-1B7t6ZNPqH79e"
    //   )
    //   .then(
    //     (result) => {
    //       setEmailSent(true);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    fetch(
      "https://h926ohbcbf.execute-api.us-west-2.amazonaws.com/test/emailapi",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to_email: email,
          name: name,
          subject: subject,
          phone: phone,
          message: message,
          location: location,
          messageOptional: messageOptional,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          setShowModal(true);
          setEmailSent(true);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setLocation("");
          setMessageOptional("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class="flex justify-center">
      <div class="max-w-screen-2xl mt-6">
        <div id="background_bulkorder">
          <div class="backgroundbubbleanimation flex justify-center">
            <h1 class="text-center absolute text-2xl sm:text-4xl font-semibold poppin_contact sm:top-80 text-gray-600">
              {" "}
              INTERESTED IN HAVING <br /> AMORIA AT YOUR EVENT?{" "}
            </h1>
            <img
              src={bobas}
              class="threebobas relative top-24 sm:top-52"
              alt="three bobas"
            />
          </div>
        </div>
        <p class="mt-24 sm:mt-52 text-center px-20 font-normal sm:text-2xl text-gray-500 poppin_contact">
          We offer on-site catering and large delivery! For more information on
          catering, fill out this form and we’ll be in touch soon!
        </p>
        <div class="grid mt-4 px-4">
          <form
            class="space-y-4 shadow-lg p-4 sm:p-6 m-8 rounded-lg min-w-2xl"
            onSubmit={sendEmail}
            ref={form}
          >
            <div>
              <label class="sr-only" for="Name">
                Name
              </label>
              <input
                class="w-full rounded-lg shadow-md p-3 text-sm border-2 border-gray-100"
                pattern="^[A-Za-z]+(?:\s[A-Za-z]+)*$"
                placeholder="Name*"
                type="text"
                id="name"
                name="from_name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label class="sr-only" for="email">
                Email
              </label>
              <input
                class="w-full rounded-lg shadow-md p-3 text-sm border-2 border-gray-100"
                placeholder="Email address*"
                type="email"
                id="to_email"
                pattern="^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b$"
                name="to_email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label class="sr-only" for="phone">
                Phone
              </label>
              <input
                class="w-full rounded-lg shadow-md p-3 text-sm border-2 border-gray-100"
                placeholder="Phone Number*"
                type="tel"
                id="phone"
                pattern="^\+?\d{1,3}[- ]?\d{3,4}[- ]?\d{4}$"
                name="reply_to_number"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label class="sr-only" for="phone">
                Location
              </label>
              <input
                class="w-full rounded-lg shadow-md p-3 text-sm border-2 border-gray-100"
                placeholder="Location*"
                type="text"
                id="location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div>
              <label class="sr-only" for="Subject">
                Subject
              </label>
              <input
                class="w-full rounded-lg shadow-md p-3 text-sm border-2 border-gray-100"
                placeholder="Subject / Type of event*"
                type="text"
                id="subject"
                name="from_subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div>
              <label class="sr-only" for="message">
                Message
              </label>

              <textarea
                class="w-full rounded-lg shadow-md p-3 text-sm border-2 border-gray-100 resize-none"
                placeholder="Please indicate desired event date, time, and location.*"
                rows="8"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div>
              <label class="sr-only" for="message">
                Message
              </label>

              <textarea
                class="w-full rounded-lg shadow-md p-3 text-sm border-2 border-gray-100 resize-none"
                placeholder="Questions and specific request."
                rows="8"
                id="message"
                name="message"
                value={messageOptional}
                onChange={(e) => setMessageOptional(e.target.value)}
              ></textarea>
            </div>

            <div class="mt-4 p-2 flex justify-end">
              <button type="submit" className="rounded-md p-2">
                <span onSubmit={sent} className="ContactConfirm">
                  {emailSent ? "Sent" : "Submit"}
                </span>
              </button>
            </div>
          </form>
          <AnimatePresence>
            {showModal && <ContactConfirmation setShowModal={setShowModal} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Contact;
