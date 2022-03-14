import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'Motion', id: 1},
    { title: 'Respite', id: 2},
    { title: 'Particles', id: 3}
  ]);
  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuidv4() }])
    // ES6 short hand: if property name = value, you can write:
    // setSongs([...songs, { title, id: uuidv4() }])
  }
  // useEffect is a function that takes in here a callback function as a parameter
  // that callback function is going to run everytime the component renders or re-renders
  // you can use this to communicate to a database or an API endpoint.
  // every time the data changes, the component re-render, and this function will fire again
  useEffect(() => {
    console.log('useEffect hook ran', songs);
  })
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return(<li key={song.id}>{song.title}</li>)
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
}

export default SongList;
