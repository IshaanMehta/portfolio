/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-5 gap-5">
      <a
        className="fa-brands fa-linkedin hover:text-blue text-3xl transition duration-200"
        href="https://www.linkedin.com/in/ishaan-mehta-0647961b6"
        target="_blank"
        rel="noreferrer"
      ></a>
      <a
        className="fa-brands fa-github hover:text-red text-3xl transition duration-200"
        href="https://github.com/IshaanMehta"
        target="_blank"
        rel="noreferrer"
      ></a>
      <a
        className="fa-brands fa-google-drive hover:text-yellow text-3xl transition duration-200"
        href="https://drive.google.com/file/d/16BF2Mrglhxw93U1q9wLP_cXecUpo9aWV/view?usp=share_link"
        target="_blank"
        rel="noreferrer"
      ></a>
    </div>
  );
};

export default SocialMediaIcons;
