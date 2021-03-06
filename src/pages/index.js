import React from "react";
import "../css/style.css";

import Layout from "../components/layout";
import SEO from "../components/seo";

import digitalMarketing from "../images/digital-marketing.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`mediavil`, `website development`, `dumaguete`, `home page`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="Digital marketing photo"
          className="min-w-2xl mx-auto"
          src={digitalMarketing}
        />

        <div>
          <h1 className="inline-block p-3 mb-4 text-2xl text-white font-bold bg-indigo-800 rounded-lg">
            Web Development Dumaguete
          </h1>
        </div>

        <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide">
          Together let us create the path to achieve success in your business.
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
