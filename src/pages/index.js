import React from "react";
import "../css/style.css";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
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
