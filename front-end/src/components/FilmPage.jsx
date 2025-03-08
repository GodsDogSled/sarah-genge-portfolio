import { useState, useEffect } from 'react';

import { useGetAllVideoUrlsQuery } from '../features/films/filmVideoSilce';
import Header from './Header';

const FilmPage = () => {
  const { data, isLoading, error } = useGetAllVideoUrlsQuery('your-storage-zone');
  console.log("data", data)
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading files</div>;

  return (
    <>
      <Header />
      {data.map(film => {
        return (
          <div key={film.id}>
            <video
              controls
              className="w-full h-auto rounded-lg shadow-md"
              src={film.url}
              title={film.title}
            >
            </video>
          </div>
        )
      })}
    </>
  );
}

export default FilmPage