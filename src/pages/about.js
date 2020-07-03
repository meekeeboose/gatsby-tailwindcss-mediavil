import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="pl-4  leading-loose text-justify border-l-4 border-gray-900 text-indigo-800 ">
            Professional and dedicated team committed to establish excellence in
            all areas of Web design, development and digital marketing. We see
            to it that our services meet your expectations.
          </blockquote>

          <cite className="block mt-4 text-xs font-bold text-right uppercase">
            – Mediavil team
          </cite>
        </div>

        <figure className="w-2/3 md:w-1/3">
          <img alt="A dog relaxing" src={dogIllustration} />
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
