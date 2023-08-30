import React from "react";

export default function VideoTitle({ title, overview }) {
  return (
    <div className="w-sreen aspect-video pt-[15%] px-24 font-bold absolute bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div className="">
        <button
          type=""
          className=" px-11 text-black p-4 text-lg  bg-white  rounded-md hover:bg-opacity-70"
        >
          ▶ Play
        </button>
        <button
          type=""
          className="bg-gray-100 px-11 text-black p-4 text-lg bg-opacity-50 m-2"
        >
          More Info
        </button>
      </div>
    </div>
  );
}
