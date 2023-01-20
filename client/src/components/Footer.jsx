import React from "react";

const Footer = () => {
  return (
    <footer className="py-2 bg-blue-600 flex place-content-center items-center">
      <div className="mx-auto text-center">
        &copy; {new Date().getFullYear()} Pod Topics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
