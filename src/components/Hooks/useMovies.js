import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSLice";
import { API_OPTIONS } from "../utils/constant";

const useMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?US&page=1",
      API_OPTIONS
    );
    const json = await response.json();
    // console.log(json);
    // addNowPlayingMovies(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useMovies;
