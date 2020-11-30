import React from "react";
//footer component
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Jonathan Martinez Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
