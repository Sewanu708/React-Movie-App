// import { Fragment } from "react";
import SideBar from "../../components/sideBar";
import NavBar from "../../components/navBar";
import Trending from "../../components/Trending Movies";
import { Fragment, useContext } from "react";
import { GlobalContext } from "../../context";
import HomeSkeleton from "../../components/skeleton/homeSkeleton";
function Home() {
  const {
    QueriesObject,
    setFavourites,
    favourites,
    currentUser,
    openSideBar,
    setOpenSideBar,
  } = useContext(GlobalContext);
  const trending = QueriesObject["Trending"][0];
  const genre = QueriesObject["Trending"][1];

  if (trending.isLoading)
    return (
      <Fragment>
        <SideBar />
        <HomeSkeleton />
      </Fragment>
    );

  return (
    <div className="bg-[#21201E] overflow-hidden">
      <SideBar openSideBar={openSideBar} setOpenSideBar = {setOpenSideBar}/>
      <NavBar
        backdrop={trending?.data.results[7]}
        favourites={favourites}
        genre={genre}
        setFavourites={setFavourites}
        user={currentUser}
        openSideBar={openSideBar}
        setOpenSideBar = {setOpenSideBar}
      />
      <Trending text={"Trending"} />
      <Trending text={"Coming Soon"} />
    </div>
  );
}

export default Home;
