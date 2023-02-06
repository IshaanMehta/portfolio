import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-7 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ishaan-mehta-0647961b6"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-10/12"
          alt="linkedIn-loga"
          src="../assets/linkedin.png"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-10/12"
          alt="twitter-link"
          src="../assets/twitter.png"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-10/12"
          alt="facebook-link"
          src="../assets/facebook.png"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-10/12"
          alt="instagram-link"
          src="../assets/instagram.png"
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
