import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import bobas from '../SiteImg/bulk order bbt.png'
import "./ContactUs.css";
//api 

export const Contact = () => {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const sent = () => {
    setEmailSent(!emailSent);
  };

  //fetch
  const form = useRef();

  const sendEmail = (e) => {
    //   e.preventDefault();
    //   emailjs
    //     .sendForm(
    //       "service_iyih0jt",
    //       "template_9mcw1oi",
    //       form.current,
    //       "pWK-1B7t6ZNPqH79e"
    //     )
    //     .then(
    //       (result) => {
    //         setEmailSent(true);
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );

    // THIS IS FOR SENDGRID FETCH
    fetch(
      "https://bsqu7rgpkn2y2mfffbaw5gefsi0ymtpb.lambda-url.us-west-2.on.aws/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: email,
          name: name,
          subject: subject,
          phone: phone,
          message: message,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          setEmailSent(true);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class="flex justify-center">
      <div class="max-w-screen-2xl">
        <div id="background_bulkorder">
            <div class="backgroundbubbleanimation flex justify-center">
            <h1 class="mt-24 text-4xl sm:mt-48 absolute sm:text-6xl font-serif text-gray-700"> Bulk Order </h1>
            <img src={bobas} class="threebobas mt-50 sm:mt-80" alt="three bobas"/>
            </div>
        </div>
         <p class="text-center px-20 font-normal sm:text-2xl avenir text-gray-500">
            For more information on catering, fill out this form and we'll be in touch soon!
          </p>
        <div class="flex justify-center mt-4 px-4">
          <form
            class="space-y-4 shadow-lg p-2 m-8 sm:p-4 rounded-lg min-w-2xl"
            onSubmit={sendEmail}
            ref={form}
          >
          <p class="text-center px-20 sm:py-10 md:py-20 font-semibold text-xl sm:text-2xl">
            For more information on catering, fill out this form and we’ll be in touch soon!
          </p>
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
                value={name}
                onChange={() => setName("")}
                required
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
                  id="email"
                  pattern="^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b$"
                  name="reply_to_email"
                  value={email}
                  onChange={() => setEmail("")}
                  required
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
                  onChange={() => setPhone("")}
                  required
                />
              </div>

              <div class="flex justify-between">
                  <div>
                <label class="sr-only" for="phone">
                  Location
                </label>
                <input
                  class="w-full sm:w-96 rounded-lg shadow-md p-3 text-sm border-2 border-gray-100"
                  placeholder="City*"
                  type="text"
                  id="location"
                  autocomplete="address-level2"
                  required
                />
              </div>
                <div>
                <label class="sr-only" for="phone">
                  Location
                </label>
                <input
                  class="w-full rounded-lg shadow-md p-3 text-sm border-2 border-gray-100"
                  placeholder="Zip-Code*"
                  type="text"
                  id="location"
                  autocomplete="postal-code"
                  required
                />
              </div>
               <div>
                <label class="sr-only" for="phone">
                  Location
                </label>
                <input
                  class="w-full rounded-lg shadow-md p-3 text-sm border-2 border-gray-100"
                  placeholder="State*"
                  type="text"
                  id="location"
                  autocomplete="address-level1"
                  required
                />
              </div>
              </div>

            <div>
                <label class="sr-only" for="phone">
                  Location
                </label>
                <input
                  class="w-full rounded-lg shadow-md p-3 text-sm border-2 border-gray-100"
                  placeholder="Address*"
                  type="text"
                  id="location"
                  autocomplete="address"
                  required
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
                value={message}
                onChange={() => setMessage("")}
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
