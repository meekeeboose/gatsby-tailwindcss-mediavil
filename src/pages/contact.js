import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
        <form
          className="mx-auto md:w-1/2"
          action="https://formspree.io/mqkybokb"
          method="POST"
        >
          <h2 className="mb-8 text-base leading-6 text-indigo-600 font-semibold tracking-wide">
            Request a quote from us.
          </h2>

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="first-name"
          >
            First Name
          </label>

          <input
            className="w-full mb-6 form-input"
            id="first-name"
            placeholder="Bill"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="last-name"
          >
            Your email
          </label>

          <input
            className="w-full mb-6 form-input"
            id="last-name"
            placeholder="bill@email.com"
            type="text"
            name="_replyto"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="message"
          >
            Your Message
          </label>

          <textarea
            className="w-full mb-6 form-textarea"
            id="message"
            placeholder="Say something..."
            rows="8"
            name="message"
          />

          <button
            className="px-4 py-2 text-sm  text-white bg-indigo-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default ContactPage;
