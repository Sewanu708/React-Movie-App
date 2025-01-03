import { useQueries } from "@tanstack/react-query";
import { createContext } from "react";
import auth from "../firebaseConfig";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [openSideBar, setOpenSideBar] = useState(false);

  function signup(auth, email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(auth, email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const loadFromStorage = JSON.parse(localStorage.getItem("favourites"));
  const loaded = loadFromStorage ? new Map(loadFromStorage) : new Map();
  const [favourites, setFavourites] = useState(loaded);

  const token = import.meta.env.VITE_AUTH_TOKEN;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: token,
    },
  };

  const links = {
    series: "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    trending:
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1",
    soon: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    seriesGenre: "https://api.themoviedb.org/3/genre/tv/list?language=en",
    movieGenre: "https://api.themoviedb.org/3/genre/movie/list?language=en",
  };

  const keys = Object.keys(links);

  const results = useQueries({
    queries: keys.map((key) => ({
      queryKey: [key],
      queryFn: () => fetchData(links[key], options),
    })),
  });

  async function fetchData(link, options) {
    try {
      const apiResponse = await fetch(link, options);
      if (!apiResponse.ok) throw new Error(apiResponse.statusText);
      const result = await apiResponse.json();
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  const soon = results[2];
  const series = results[0];
  const trending = results[1];
  const seriesGenre = results[3];
  const movieGenre = results[4];

  const QueriesObject = {
    "Coming Soon": [soon, movieGenre],
    Series: [series, seriesGenre],
    Trending: [trending, movieGenre],
  };

  return (
    <GlobalContext.Provider
      value={{
        QueriesObject,
        favourites,
        setFavourites,
        seriesGenre,
        movieGenre,
        currentUser,
        login,
        signup,
        loading,
        openSideBar,
        setOpenSideBar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
