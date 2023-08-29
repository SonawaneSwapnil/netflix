import React, { useState } from "react";
import Header from "./Header";

export default function Login() {
  const [sign, setSign] = useState(true);
  const toogleSignInform = () => {
    setSign(!sign);
  };
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
        alt="bg-image"
      />

      <form className="absolute p-11 text-white bg-gray-900 w-3/12 my-36  mx-auto right-0 left-0 bg-opacity-90">
        <h1 className="font-bold text-3xl py-4">
          {sign ? "Sign in" : "Sign Up"}
        </h1>
        {!sign && (
          <input
            type="text"
            name="text"
            value=""
            placeholder="Enter Full Name "
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          name="email"
          value=""
          placeholder="email"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          name="password"
          value=""
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button type="submit" className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {sign ? "Sign in" : "Sign Up"}
        </button>

        <p className="font-bold cursor-pointer" onClick={toogleSignInform}>
          {sign ? "New To NetFlix? Sign Up" : "Alereay register! sign in"}
        </p>
      </form>
    </div>
  );
}
