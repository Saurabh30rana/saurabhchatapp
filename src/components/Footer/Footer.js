import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="page-footer"
        style={{
          backgroundColor: "#2979FF",
          height: "60px",
          color: "white",
          textAlign: "center",
          paddingBottom: "20pxpx",
        }}
      >
        <div className="footer-copyright text-center py-3">
          © 2021 Copyright:
          <p>
            Designed and developed by <b  style={{color: "white", }}>SAURABH AND KAPIL</b>
            <span role="img" aria-label="emoji">⬅️</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
