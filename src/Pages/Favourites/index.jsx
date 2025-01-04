import { Fragment, useContext } from "react";
import { GlobalContext } from "../../context";
import SideBar from "../../components/sideBar";
import TrendingNav from "../../components/navBar/nav";
import { useNavigate } from "react-router-dom";
import FavMore from "./more";
function Favourites() {
  const {
    seriesGenre,
    movieGenre,
    favourites,
    setFavourites,
    currentUser,
    openSideBar,
    setOpenSideBar,
  } = useContext(GlobalContext);

  const mGenre = movieGenre.data.genres;
  const sGenre = seriesGenre.data.genres;
  const navigate = useNavigate();

  return (
    <Fragment>
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <section
        class="favourites"
        className="bg-[#21201E] overflow-hidden max-w-[1300px] px-[16px]  sm:px-[32px] py-[32px] ml-[0px] lg:ml-[280px]"
      >
        <TrendingNav user={currentUser} setOpenSideBar={setOpenSideBar} />
        <div class="trend-text" className="py-[20px] font-[600] text-white">
          Favourites
        </div>
        <div
          class="favs"
          className="w-full min-h-screen grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4  gap-x-[20px] gap-y-[20px]"
        >
          {" "}
          {favourites.size < 1 ? (
            <Fragment>
              <h1></h1>
              <h1 className="text-white flex justify-center items-center">
                Go like some movies!
              </h1>
            </Fragment>
          ) : (
            [...favourites.entries()].map((fav, index) =>
              FavMore(fav, index, mGenre, sGenre, setFavourites, favourites)
            )
          )}
        </div>
      </section>
    </Fragment>
  );
}
export default Favourites;
