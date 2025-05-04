import React from "react";
import { useEffect, useRef } from "react";

export default function WelcomeMassage() {
  const welcomeMassage = useRef(null);
  useEffect(() => {
    welcomeMassage.current.style.opacity = "100%";
    setTimeout(() => {
      welcomeMassage.current.style.opacity = "0%";
    }, 2500);
  }, []);
  return (
    <div
      ref={welcomeMassage}
      className="shadow opacity-0 duration-300 grid gap-3 !ml-[auto] !mr-[auto] !mt-[55px] max-w-[500px] justify-items-center !p-[5px]"
    >
      <img
        src="images-folder/site-Logo.png"
        className="w-[400px] h-[300px] rounded-2xl"
      />
      <h1 className="text-[#eeeeeed1] flex gap-1 font-bold">
        WELCOME TO <p className="text-[#0a6288]">MOBLIE PHONE</p>
      </h1>
      <p className="text-[#eeeeeed1] font-bold text-center">
        Your go-to destination for the latest smartphones, accessories, and
        expert reviews. We're passionate about keeping you connected with the
        best mobile technology at unbeatable prices. Shop smart, stay connected.
      </p>
    </div>
  );
}
