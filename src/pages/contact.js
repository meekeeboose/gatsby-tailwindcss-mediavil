import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `mediavil`,
          `website development`,
          `dumaguete`,
          `contact page`,
        ]}
        title="Contact"
      />

      <div className="max-w-2xl mx-auto">
        <img
          src="https://image.freepik.com/free-vector/digital-marketing-illustration_1893-2527.jpg"
          alt="two people working"
        />
      </div>

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
            Your Name
          </label>

          <input
            className="w-full mb-6 form-input bg-indigo-100"
            id="first-name"
            placeholder="Julie Ann"
            type="text"
            required
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="email"
          >
            Your email
          </label>

          <input
            className="w-full mb-6 form-input bg-indigo-100"
            id="email"
            placeholder="julieann@email.com"
            type="email"
            name="_replyto"
            required
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="message"
          >
            Your Message
          </label>

          <textarea
            className="w-full mb-6 form-textarea bg-indigo-100"
            id="message"
            placeholder="Tell us what you need..."
            rows="8"
            name="message"
            required
          />

          <button
            className="px-4 py-2 text-sm  text-white bg-indigo-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-indigo-900"
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
