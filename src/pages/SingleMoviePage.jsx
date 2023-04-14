import React, { useState, useEffect } from 'react';
import { API_KEY } from '../components/context';
import { useParams, Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
const SingleMoviePage = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState("");
  const { Title, Type, Director, BoxOffice, Language, Country, Rated, Released, Year, Poster, Actors, Genre, Writer, Ratings } = movies;
  const [loading, setLoading] = useState(true);
  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      if (data.Response === "True") {
        setLoading(false);
        setMovies(data);
      }
    }

    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    let setTime = setTimeout(() => {
      fetchMovies(`${API_KEY}i=${id}`)
    }, 800);
    return () => clearTimeout(setTime);
  }, [id]);


  if (loading) {
    return (
      <div className="loading-container">
        <h1 className='loading'>LOADING...</h1>
      </div>
    )
  }

  const ActorArray = Actors.split(", ");
//   console.log(ActorArray);

  const GenreArray = Genre.split(", ");
//   console.log(GenreArray);

  const WriterArray = Writer.split(", ");
//   console.log(WriterArray);

  return (

    <section>
      <div className="container">
        <div className="poster-container">
          <div className="poster-img-container">
            <img className='poster-img' src={Poster} alt="movie-poster-img" />
          </div>
          <div className="poster-details">
            <span>Title -   {Title} </span>
            <span>Type -   {Type} </span>
            <span>Director -   {Director} </span>
            <span>BoxOffice -   {BoxOffice} </span>
            <span>Language -   {Language} </span>
            <span>Country -   {Country} </span>
            <span>RATED -   {Rated} </span>
            <span>Released -   {Released} </span>
            <span>Year -   {Year} </span>


            <div className="genre-section">
              {GenreArray.map((genre, index) => {
                return (
                  <div className="genre-box" key={index}>
                    <p>{genre}</p>
                  </div>
                )
              })}
            </div>

            <Link to="/" className="go-back">
              Go Back
            </Link>

          </div>
        </div>


        <div className="movie-team-container">
          <div className="team-container">
            <SectionHeading heading="Actors" />
            {ActorArray.map((actor, index) => {
              return (
                <h2 key={index} className="team-heading">{actor}</h2>
              )
            })}
          </div>


          <div className="team-container">
            <SectionHeading heading="Writers" />
            {WriterArray.map((writer, index) => {
              return (
                <h2 key={index} className="team-heading">{writer}</h2>
              )
            })}
          </div>


          <div className="team-container" >
            <SectionHeading heading="Rating Sites" />
            {Ratings.map((rating, index) => {
              return (
                <div key={index}>
                  <a title='redirect to official website' href={`https://www.imdb.com/title/${movies.imdbID}`} target="_blank" className='rating-link'>{rating.Source}</a>
                </div>
              )
            })}
          </div>

        </div>


      </div>
    </section>
  )
}

export default SingleMoviePage;
