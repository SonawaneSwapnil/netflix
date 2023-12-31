import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "./utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/Firebase";

export default function Login() {
  const [errormessage, setErrorMessage] = useState(null);
  const [sign, setSign] = useState(true);

  const toogleSignInform = () => {
    setSign(!sign);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormData = () => {
    // checkValidation(email)

    const message = checkValidation(
      email.current.value,
      password.current.value
      // name.current.value
    );

    setErrorMessage(message);

    if (message) return;
    if (!sign) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
        // name.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              setErrorMessage(error);
              // An error occurred
              // ...
            });

          alert("Sign in Successfully!!");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // setErrorMessage(errorCode + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
        alt="bg-image"
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-11 text-white bg-gray-900 w-3/12 my-36  mx-auto right-0 left-0 bg-opacity-90"
      >
        <h1 className="font-bold text-3xl py-4">
          {sign ? "Sign in" : "Sign Up"}
        </h1>
        {!sign && (
          <input
            ref={name}
            type="text"
            name="text"
            placeholder="Enter Full Name "
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="email"
          name="email"
          placeholder="email"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500">{errormessage}</p>
        <input
          ref={password}
          type="password"
          name="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button
          type="submit"
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleFormData}
        >
          {sign ? "Sign in" : "Sign Up"}
        </button>

        <p className="font-bold cursor-pointer" onClick={toogleSignInform}>
          {sign ? "New To NetFlix? Sign Up" : "Alereay register! sign in"}
        </p>
      </form>
    </div>
  );
}
