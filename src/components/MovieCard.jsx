import React from 'react';
import { Link } from 'react-router-dom';
const MovieCard = ({movie}) => {
  const {imdbID, Poster, Title, Type, Year} = movie;

  return (
    <Link to={`movies/${imdbID}`} className="movie-link">
      <div className="movie-card">
        <div className="card-image">
          <img src={Poster || "https://images.pexels.com/photos/8451490/pexels-photo-8451490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt={Title} className='image' />
        </div>
        <div className="card-details">
          <span>Title - <b>{Title.slice(0,6) + "..."}</b> </span>
          <span>Type - <b>{Type}</b> </span>
          <span>Year - <b>{Year}</b> </span>
        </div>
      </div>
    </Link>
  )
}



export default MovieCard;
