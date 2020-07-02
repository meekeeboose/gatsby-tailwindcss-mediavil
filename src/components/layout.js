import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      <Header />

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer style={{ backgroundColor: "#574b90" }}>
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white">Blazing Fast Websites</p>
          <p className="text-white">&copy; 2020</p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
