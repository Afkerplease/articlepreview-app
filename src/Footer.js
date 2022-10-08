import React from "react";
import facebook from "./images/icon-facebook.svg";
import pinterest from "./images/icon-pinterest.svg";
import twitter from "./images/icon-twitter.svg";
import share from "./images/icon-share.svg";

function Footer({ setClicked }) {
  return (
    <div className="bg-darkGray p-4  w-[100%] flex justify-between  ">
      <div className="flex gap-4 items-center justify-center ml-7">
        <p className=" uppercase text-lightBlue font-ManRope font-[100] text-[15px] tracking-[0.3rem] ">
          Share
        </p>
        <img className="cursor-pointer" src={facebook} alt="" />
        <img className="cursor-pointer" src={twitter} alt="" />
        <img className="cursor-pointer" src={pinterest} alt="" />
      </div>
      <button
        onClick={setClicked}
        className=" bg-lightBlue  p-3 rounded-full justify-center flex items-center "
      >
        <img className=" " src={share} alt="" />{" "}
      </button>
    </div>
  );
}

export default Footer;
