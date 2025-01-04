export default function FavMore(
  fav,
  index,
  mGenre,
  sGenre,
  setFavourites,
  favourites
) {
  const favData = fav[1];
  const img = `https://image.tmdb.org/t/p/original/${favData.poster_path}`;
  const movieDate = new Date(
    favData.release_date || favData.first_air_date
  ).getFullYear();
  const favGenres = mGenre.findIndex(
    (genre) => genre.id == favData.genre_ids[0]
  );

  let genres;
  if (favGenres > -1) {
    genres = favData.genre_ids
      .reduce((a, c) => {
        a.push(mGenre.find((g) => g.id === c).name);

        return a;
      }, [])
      .join(" ");
  } else {
    genres = favData.genre_ids
      .reduce((a, c) => {
        a.push(sGenre.find((g) => g.id === c));

        return a;
      }, [])
      .join(" ");
  }

  return (
    <div
      key={index}
      className="w-[100%] h-[201px] lg:w-[100%] lg:h-[301px] flex flex-col items-start justify-start relative rounded-sm"
      data-id={favData.id}
      // onClick={() => {
      //   setSelectedMovie(trend);
      // }}
    >
      <div className="w-[100%] h-[201px] lg:w-[100%] lg:h-[301px]">
        <img
          src={img}
          alt={favData.title || favData.name}
          className="w-full h-full rounded-lg object-cover  "
        />
      </div>
      <div className="absolute bottom-0 bg-[#ffffff99] w-[100%]  lg:w-[100%]   rounded-b-lg px-[20px] py-[16px]">
        <div className="text-[12px] md:text-[14px] lg:text-[16px]">
          {favData.title}
        </div>
        <div>
          <span className="h-[50px] truncate text-[12px] md:text-[14px] lg:text-[16px]">
            {movieDate} {"  "}|{"  "}
          </span>
          <span className="text-[12px] md:text-[14px] lg:text-[16px]">
            {genres}
          </span>
        </div>
      </div>

      <button
        className="absolute top-[20px] right-[20px] bg-[#ffffff99] w-[32px] h-[32px] rounded flex items-center justify-center"
        onClick={() => {
          setFavourites((prev) => {
            if (prev.get(favData.id)) {
              const newMap = new Map(prev);
              newMap.delete(favData.id);
              return newMap;
            } else {
              const newMap = new Map(prev);
              newMap.set(favData.id, trend);
              return newMap;
            }
          });
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={favourites.has(favData.id) ? "#6100C2" : "none"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999V4.60999Z"
            stroke={favourites.has(favData.id) ? "none" : "white"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
