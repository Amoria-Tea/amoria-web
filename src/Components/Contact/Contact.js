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
        <>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
                <h1 class="flex justify-center pb-4 font-semibold text-gray-700 text-2xl">
                   Let's Connect! 
                </h1>
                <p class="text-center">
                    Company *Snippet and some important information before calling*
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quas aperiam error consectetur totam, magnam debitis sint. Voluptate illum odit temporibus alias possimus eaque tempore iure ratione accusamus! Culpa, cupiditate!
                </p>
            </div>
            <div className="flex justify-center">
            <form className="space-y-4 shadow-md p-4 rounded-lg" onSubmit={onSubmit}>
          <div>
            <h1 className="flex justify-center pb-4 font-semibold text-gray-700 text-2xl">
                Contact
            </h1>
            <label className="sr-only" htmlFor="Name">Name</label>
            <input
              className="w-full rounded-lg shadow-md p-3 text-sm"
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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg shadow-md  p-3 text-sm"
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
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg shadow-md  border-2 p-3 text-sm"
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
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg shadow-md border-2 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="mt-4">
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
        </>
    );
}

export default Contact;