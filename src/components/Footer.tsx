import React from "react";

const Footer = () => {

    const handleLoadingProffile = () => {
        window.open('https://www.linkedin.com/in/muhammed-aflah-24b58725b/')
    }
   return (
    <footer>
        <div className="footerText">
          <h2>How good is your memory?</h2>
          <p>Tip: Finish with fewer moves and fewer time to beat your best score!</p>
        </div>
      <div>
        <p className="">Built by <a href="" onClick={handleLoadingProffile}>Aflah</a> • Just for fun</p>
      </div>
    </footer>
  );
};

export default Footer;
