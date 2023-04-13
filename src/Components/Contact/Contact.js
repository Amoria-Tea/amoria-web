import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

export const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);

  const sent = () => {
    setEmailSent(!emailSent);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iyih0jt",
        "template_9mcw1oi",
        form.current,
        "pWK-1B7t6ZNPqH79e"
      )
      .then(
        (result) => {
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div class="flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 mb-12 max-w-screen-2xl">
        <div>
          <h1 class="flex justify-center pb-4 font-semibold text-gray-700 text-2xl">
            Let's Connect!
          </h1>
          <p class="text-center px-20">
            Company *Snippet Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Repudiandae quas aperiam error consectetur totam, magnam
            debiti.
          </p>
        </div>
        <div class="flex justify-center">
          <form
            class="space-y-4 shadow-md p-4 rounded-lg min-w-full"
            onSubmit={sendEmail}
            ref={form}
          >
            <div>
              <label class="sr-only" for="Subject">
                Subject
              </label>
              <input
                class="w-full rounded-lg shadow-md p-3 text-sm border-2 border-gray-100"
                placeholder="Subject"
                type="text"
                id="subject"
                name="from_subject"
              />
            </div>

            <div>
              <label class="sr-only" for="Name">
                Name
              </label>
              <input
                class="w-full rounded-lg shadow-md p-3 text-sm border-2 border-gray-100"
                pattern="^[A-Za-z]+(?:\s[A-Za-z]+)*$"
                placeholder="Name"
                type="text"
                id="name"
                name="from_name"
                required
              />
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="email">
                  Email
                </label>
                <input
                  class="w-full rounded-lg shadow-md p-3 text-sm border-2 border-gray-100"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  pattern="^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b$"
                  name="reply_to_email"
                  required
                />
              </div>

              <div>
                <label class="sr-only" for="phone">
                  Phone
                </label>
                <input
                  class="w-full rounded-lg shadow-md p-3 text-sm border-2 border-gray-100"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  pattern="^\+?\d{1,3}[- ]?\d{3,4}[- ]?\d{4}$"
                  name="reply_to_number"
                  required
                />
              </div>
            </div>

            <div>
              <label class="sr-only" for="message">
                Message
              </label>

              <textarea
                class="w-full rounded-lg shadow-md p-3 text-sm border-2 border-gray-100 resize-none"
                placeholder="Message"
                rows="8"
                id="message"
                name="message"
              ></textarea>
            </div>

            <div class="mt-4 p-2 flex justify-end">
              <button type="submit" className="rounded-md p-2">
                <span onSubmit={sent} className="ContactConfirm">
                  {emailSent ? "Message Sent" : "Send"}
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
