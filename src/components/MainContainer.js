import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";

export default function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  ///error--------Cannot read properties of null (reading '0')
  if (!movies) return;
  const mainMovies = movies[0];
  console.log(mainMovies);

  const { original_title, overview, id } = mainMovies;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBg movieId={id} />
    </div>
  );
}
