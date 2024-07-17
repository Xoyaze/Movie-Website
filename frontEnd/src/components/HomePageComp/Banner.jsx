import {  useContext, useEffect, useRef, useState } from 'react'
import { apiKey } from '../../handles/apiHandler';
import axios from 'axios';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MovieContext } from '../../pages/HomePage';

const Banner = () => {

  //refs here
  const bannerBackground = useRef(null);
  const bannerBackgroundTwo = useRef(null);
  const bannerDetails = useRef(null);


  //movies here
  const [movies, setMovies] = useState([]);
  const [displayMovie, setDisplayMovie] = useState();


  //contexts here
  const {contextMovies} = useContext(MovieContext);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if(contextMovies.length === 0){
          const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`;
          const response = await axios.get(url);
          setMovies(response.data.results);
          console.log(response.data.results);
          setDisplayMovie(response.data.results[2])
        }else{
          setMovies([...contextMovies]);
          setDisplayMovie(contextMovies[0]);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
  
    fetchMovies();
  }, [contextMovies]);
      
    
    const changeMovie = () => {
      gsap.to(bannerBackground.current, {
        opacity: 0,
        duration: 0.2,
        ease: 'power1.in',
      })
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * movies.length);
        setDisplayMovie(movies[randomIndex]);
      }, 500);
      gsap.to(bannerBackground.current, {
        delay: 0.5,
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power1.in',
      })
    }


    useGSAP(() => {

      const bannerTimeline = gsap.timeline();

      

      bannerTimeline.fromTo(bannerBackground.current, {
        opacity: 0,
        clipPath: 'circle(0% at 50% 50%)',
      }, {
        clipPath: 'circle(100% at 50% 50%)',
        opacity: 1,
        duration: 3,
        ease: 'power1.out',
      })

      gsap.fromTo(bannerBackgroundTwo.current, {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 1.5,
        ease: 'power1.out',
      }, "-=2")
      
      bannerTimeline.fromTo(bannerDetails.current.children, {
        opacity: 0,
      }, {
        delay: 0.8,
        opacity: 1,
        duration: 1,
        ease: 'power1.out',
      }, "-=2")



    }, []);




  return (
    <div className='h-[75vh] w-full relative -top-[8vh] px-4 py-2 z-[80]'>
      <div className="h-[38%]"></div>
      <div ref={bannerDetails} className='h-auto w-1/3 flex flex-col gap-4 relative z-[80]'>
        <h1 className='line-clamp-2 text-5xl text-yellow-500'>{displayMovie?.title ? displayMovie.title : 'Movie Title'}</h1>
        <p className='line-clamp-5'>{displayMovie?.overview ? displayMovie.overview : "Movie description Unavailable"}</p>

        <div>
          <button className='py-2 px-4 bg-yellow-600 text-gray-800 rounded hover:px-5 active:px-4 hover:bg-yellow-500 transition-hover duration-150'>Get Started</button>
          <button onClick={changeMovie} className='ml-4 py-1 hover:border-l hover:border-r active:text-yellow-500 hover:border-yellow-500 px-4 h-[80%] transition-hover duration-100 hover:text-gray-200 rounded active:border-orange-500'>View Another</button>
        </div>
      </div>

      <div ref={bannerBackgroundTwo} className="h-full w-full absolute bg-gradient-to-r from-theme-dark via-[rgba(0,0,0,0.3)] to-theme-dark top-0 left-0 z-[50]  pointer-events-none"></div>
      <div ref={bannerBackground} className={`h-full w-full absolute top-0 left-0 z-[40] ${displayMovie?.backdrop_path ? 'bg-cover' : 'bg-none'}`} style={displayMovie?.backdrop_path ? { backgroundImage: `url('https://image.tmdb.org/t/p/original${displayMovie.backdrop_path}')` } : {}}>
      </div>


    </div>
  )
}

export default Banner
