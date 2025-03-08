import { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from '../../supabase-client';
import { useGetAllVideoUrlsQuery } from '../features/films/filmVideoSilce';

const FilmPage = () => {
  const { data, isLoading, error } = useGetAllVideoUrlsQuery('your-storage-zone');
  console.log("data", data)
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading files</div>;

  return (
    <div>
      {data.map(film => {
        return (
          <div key={film.id}>
            <video
              controls
              className="w-full h-auto rounded-lg shadow-md"
              src={film.url}>
            </video>
          </div>
        )
      })}
    </div>
  );
}

export default FilmPage