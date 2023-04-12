import React, {useState} from 'react';


function Contact(props) {
  const [emailSent, setEmailSent] = useState(false);
  const [name, setName] = useState("")  
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("")

  const onSubmit = (e) => {
    return;
  }

  
    return (
        <div class="flex justify-center">
        <div class="grid grid-cols-1 md:grid-cols-2 mb-12 max-w-screen-2xl">
            <div>
                <h1 class="flex justify-center pb-4 font-semibold text-gray-700 text-2xl">
                   Let's Connect! 
                </h1>
                <p class="text-center px-20">
                    Company *Snippet and/or some important information before calling*
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas aperiam error consectetur totam, magnam debiti.
                </p>
                <a href="tel:732-515-8724" class="flex justify-center mt-4 font-semibold text-lg md:text-2xl text-gray-700">
                    732-515-8724
                </a>
                <a href="mailto: mike@amoriatea.com" class="flex justify-center mt-4 font-semibold text-lg md:text-2xl text-gray-700">
                    mike@amoriatea.com
                </a>
            </div>
            <div class="flex justify-center">
            <form class="space-y-4 shadow-md p-4 rounded-lg min-w-full" onSubmit={onSubmit}>
          <div>
            <h1 class="flex justify-center pb-4 font-semibold text-gray-700 text-2xl">
                Contact
            </h1>
            <label class="sr-only" htmlFor="Name">Name</label>
            <input
              class="w-full rounded-lg shadow-md p-3 text-sm"
              pattern='^[A-Za-z]+(?:\s[A-Za-z]+)*$'
              placeholder="Name"
              type="text"
              id="name"
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" htmlFor="email">Email</label>
              <input
                class="w-full rounded-lg shadow-md  p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
                pattern="^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b$"
                name="reply_to_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label class="sr-only" htmlFor="phone">Phone</label>
              <input
                class="w-full rounded-lg shadow-md  border-2 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
                pattern='^\+?\d{1,3}[- ]?\d{3,4}[- ]?\d{4}$'
                name="reply_to_number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label class="sr-only" htmlFor="message">Message</label>

            <textarea
              class="w-full rounded-lg shadow-md border-2 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
            >
              {/* <span>
                {emailSent ? 'Sent' : 'Confirm'}
              </span> */}
            </button>
          </div>
        </form>
        </div>
        </div>   
        </div>
    );
}

export default Contact;