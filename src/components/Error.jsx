import React from 'react';
import { useGlobalContext } from './context';
const Error = () => {
  const {error} = useGlobalContext();
  return (
    <div className="movie-error">
    <p>{error.show && error.message}</p>
    </div>
  )
}

export default Error;
