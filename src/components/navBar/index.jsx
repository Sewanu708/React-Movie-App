import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function NavBar({
  backdrop,
  genre,
  favourites,
  setFavourites,
  user,
  setOpenSideBar,
}) {
  const navBG = useRef();
  const navigate = useNavigate();
  const dt = new Date(backdrop.release_date);
  const genres = genre.data.genres;
  const movieGenre = backdrop.genre_ids
    .reduce((a, c) => {
      a.push(genres.find((g) => g.id == c).name);
      return a;
    }, [])
    .join(" ");

  useEffect(() => {
    navBG.current.style.backgroundImage = `url('https://image.tmdb.org/t/p/${backdrop.backdrop_path}')`;
  }, [backdrop]);
  return (
    <section
      className="max-w-[1300px] lg:ml-[280px] h-[455px] bg-center bg-cover bg-no-repeat  bg-transparent ml-0"
      ref={navBG}
    >
      <div className="h-[455px] bg-gradient-to-t from-[#191817] to-[rgba(255,255,255,0.1)] to-93% px-[32px] w-full  py-[40px] flex flex-col justify-between">
        <nav className="w-full flex items-center justify-between text-white">
          <div className="flex gap-x-[32px] hidden lg:flex  ">
            <div id="movies"  className="font-[500] cursor-pointer transition ease-in duration-100">Movies</div>
            <div
              className="font-[500] cursor-pointer transition ease-in duration-100"
              onClick={() => {
                navigate("/Series");
              }}
            >
              Series
            </div>
            <div className="font-[500] cursor-pointer transition ease-in duration-100">
              Documentaries
            </div>
          </div>
          <div className="cursor-pointer block lg:hidden">
            <img src="public\logo.svg" alt="Watch Logo" />
          </div>
          <FontAwesomeIcon
            icon={faBars}
            className="block lg:hidden cursor-pointer"
            onClick={()=>setOpenSideBar(prev=>!prev)}
          />

          <div className="flex gap-x-[27px] hidden  lg:flex">
            <img src="public\search.svg" alt="" />

            <img src="public\bell.svg" alt="" />

            <div className="flex gap-x-[9px] items-center font-400">
              <div className="w-[32px] h-[32px] ">
                <img
                  src="public\freepik__candid-image-photography-natural-textures-highly-r__79590.jpeg"
                  alt=""
                  className="rounded-full"
                />
              </div>

              <div>{user.displayName}</div>
            </div>
          </div>
        </nav>

        <div className="flex flex-col text-white">
          <div className="font-[700] text-[28px] md:text-[38px] lg:text-[48px] mb-[20px]  pr-[10px] truncate">
            {backdrop.title}
          </div>
          <div className="text-[14px] mb-[36px]">
            <span>{dt.getFullYear()} |</span> <span>{movieGenre}</span>
          </div>

          <div className="flex gap-x-[10px]">
            <button className="rounded-lg outline-none w-[139px] cursor-pointer h-[54px] text-white border border-[#6100C2] bg-[#6100C2]">
              Watch now
            </button>

            <button
              className="rounded-lg text-[36px] outline-none w-[54px] cursor-pointer hover:scale-95 ease-in transition-all duration-[150] h-[54px] flex items-center justify-center border bg-white"
              onClick={() => {
                setFavourites((prev) => {
                  const newMap = new Map(prev);
                  if (prev.get(backdrop.id)) {
                    newMap.delete(backdrop.id);
                  } else {
                    newMap.set(backdrop.id, backdrop);
                  }
                  return newMap;
                });
              }}
            >
              <svg
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill={favourites.has(backdrop.id) ? "black" : "none"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999V4.60999Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
