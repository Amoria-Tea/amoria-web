import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import bobas from '../SiteImg/bobaarmy.png'
import "./ContactUs.css";

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
      <div class="grid grid-cols-1 mb-12 max-w-screen-2xl">
        <div class="xl:h-96 lg:h-80 md:h-72">
        <div class="grid grid-cols-2 h-52">
          <div class="mt-12" id="background_bulkorder">
          <h1 class="md:mt-20 lg:mt-30 flex justify-center sm:p-2 md:p-3 font-semibold text-gray-900 text-lg md:text-4xl fade-in">
            Bulk Order 
          </h1>
          <p class="text-center mb-2 md:mb-10 text-sm md:text-xl fade-in">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ipsam quia nulla, neque velit deleniti unde, nesciunt asperiores repudiandae porro perferendis odio quisquam! 
          </p>
          </div>
          <div class="flex justify-center items-center" id="background_bobaarmy">
            <picture>
              <img src={bobas} alt="bobas" className="fadeInTop"/>
            </picture>
          </div>
        </div>
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

            <div>
                <label class="sr-only" for="phone">
                  Phone
                </label>
                <input
                  class="w-full rounded-lg shadow-md p-3 text-sm border-2 border-gray-100"
                  placeholder="Location*"
                  type="text"
                  id="location"
                  pattern="^\+?\d{1,3}[- ]?\d{3,4}[- ]?\d{4}$"
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
