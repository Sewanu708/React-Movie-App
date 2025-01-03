import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
function Details({ selectedMovie, genre }) {
  const selectedMovieImg = `https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`;
  const selectedMovieDate = new Date(
    selectedMovie.release_date || selectedMovie.first_air_date
  ).getFullYear();
  console.log(selectedMovieDate);

  const selectedMovieGenre = selectedMovie.genre_ids
    .reduce((a, c) => {
      a.push(genre.find((g) => g.id == c).name);
      return a;
    }, [])
    .join(" ");

  return (
    <Fragment>
      <div className=" ml-0 lg:ml-[280px] bg-[#21201E] grid grid-cols-1 md:grid-cols-[1fr,1fr] px-4 md:px-[32px] gap-x-[24px] gap-y-[16px]">
        <div className="w-[100%] h-[420px] rounded-[20px] border border-[#ffffff99]">
          <img
            loading="lazy"
            src={selectedMovieImg}
            alt={selectedMovie.title}
            className="w-[100%] h-full rounded-[20px] object-cover"
          />
        </div>
        <div className="w-[100%] text-white">
          <div className="w-[100%] flex items-start justify-between mb-[12px]">
            <div className="w-[70%] text-[20px] font-[700] ">
              {selectedMovie.original_title || selectedMovie.original_name}
            </div>

            <div className="w-[20%] flex items-center gap-x-[8px] text-[14px] font-300">
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              <p>{selectedMovie.vote_average.toFixed(1)}/10</p>
            </div>
          </div>
          <div className="mb-[21px] text-[14px]  md:text-4">
            <div>
              {selectedMovieDate}
              <span className="ml-[36px] text-[14px]  md:text-4">{selectedMovieGenre}</span>
            </div>
          </div>
          <div className="mb-[10px] sm:mb-4 text-[14px]  md:text-4">{selectedMovie.overview}</div>
          <div className="flex gap-x-16px">
            <button className="rounded-[14px] outline-none w-[139px] cursor-pointer h-[54px] text-white bg-[#6100C2]">
              Watch now
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Details;
