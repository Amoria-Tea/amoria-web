import React from 'react';

function Contact(props) {
    return (
        <>
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="flex justify-center">
                <h1>
                   Let's Connect! 
                </h1>
            </div>
            <div class="flex justify-center">
                  <form class="space-y-4">
          <div>
            <label class="sr-only" for="Name">Name</label>
            <input
              class="w-full rounded-lg border-gray-500 p-3 text-sm"
              pattern='^[A-Za-z]+(?:\s[A-Za-z]+)*$'
              placeholder="Name"
              type="text"
              id="name"
              name="from_name"
              required
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-gray-500 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
                pattern="^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b$"
                name="reply_to_email"
                required
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-gray-500 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
                pattern='^\+?\d{1,3}[- ]?\d{3,4}[- ]?\d{4}$'
                name="reply_to_number"
                required
              />
            </div>
          </div>

          <div>
            <label class="sr-only" for="message">Message</label>

            <textarea
              class="w-full rounded-lg border-gray-500 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
              name="message"
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
        </>
    );
}

export default Contact;