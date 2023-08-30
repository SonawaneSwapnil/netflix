import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailorVideo } from "../utils/movieSLice";
import { useEffect } from "react";

const useTrailor = (movieId) => {
  //fetch trailar video
  const dispatch = useDispatch();
  const getMovieTrailor = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "615656/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const filterData = json.results.filter((video) => video.type == "Trailar");
    const filter = filterData.length ? filterData[0] : json.results[10];
    console.log(filter);

    dispatch(addTrailorVideo(filter.results));
  };

  useEffect(() => {
    getMovieTrailor();
  }, []);
};
export default useTrailor;
