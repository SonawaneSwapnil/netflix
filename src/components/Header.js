import React, { useEffect } from "react";
import { auth } from "./utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayname } = user;
        dispatch(addUser({ uid: uid, email: email, displayname: displayname }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  return (
    <div className="absolute px-8 w-screen bg-gradient-to-b from-black z-10 flex justify-between p-3">
      <img
        className="w-36 "
        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
        alt="logo"
      />

      <div className="flex">
        <img
          className="w-12 h-12 "
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          alt=""
        />
        <button
          type=""
          className="font-bold text-white"
          onClick={handleSignOut}
        >
          (Sign out)
        </button>
      </div>
    </div>
  );
}
