import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <p className="text-center mt-4 mb-4">
          &copy;{new Date().getFullYear()} | Made with 💖 by TCode
        </p>
      </footer>
    </>
  );
};

export default Footer;
