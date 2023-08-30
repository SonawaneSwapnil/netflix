import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "./utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "./utils/movieSLice";
import useMovies from "./Hooks/useMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
export default function Browse() {
  useMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      <div></div>
    </div>
  );
}
