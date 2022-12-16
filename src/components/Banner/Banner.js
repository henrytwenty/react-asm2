import React, { useEffect, useContext, useState, useCallback } from 'react';
import UseRequest from '../../store/use-request';
import classes from './Banner.module.css';

const Banner = (props) => {
  // HOOK declare
  const requests = useContext(UseRequest);
  const [bannerMovies, setBannerMovie] = useState({});

  const url = `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`;
  const fetchBannerMovie = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went Wrong!!!');
      }
      const data = await response.json();
      setBannerMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    } catch (error) {
      console.log(error.message);
    }
  }, [url]);

  useEffect(() => {
    fetchBannerMovie();
  }, [fetchBannerMovie]);
  console.log(bannerMovies);
  return (
    <div className={classes.banner}>
      <img
        className={classes['banner-img']}
        src={`https://image.tmdb.org/t/p/original/${bannerMovies.backdrop_path}`}
        alt={bannerMovies.original_name}
      ></img>
      <div className={classes[`banner-info`]}>
        <p className={classes[`banner-info__title`]}>
          {bannerMovies.original_name}
        </p>
        <button className={classes[`banner-info__btn`]}>Play</button>
        <button className={classes[`banner-info__btn`]}>My List</button>
        <p className={classes[`banner-info__overview`]}>
          {`${bannerMovies.overview?.slice(0, 150)}...`}
        </p>
      </div>
    </div>
  );
};

export default Banner;
