import React from "react";
import {FaInstagram, FaXTwitter, FaYoutube} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.webtechpoint.in">
          <FaYoutube size={20} />
        </a>
        <a href="https://www.webtechpoint.in">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.webtechpoint.in">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
