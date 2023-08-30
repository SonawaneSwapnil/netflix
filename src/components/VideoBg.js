import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import useTrailor from "./Hooks/useTrailor";
export default function VideoBg({ movieId }) {
  const trailarVideo = useSelector((store) => store.movies?.trailarVideo);
  useTrailor(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/dG91B3hHyY4?si=JuwGfqNrHY384wDx" +
          trailarVideo?.key +
          "&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
