import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'Motion', id: 1},
    { title: 'Respite', id: 2},
    { title: 'Particles', id: 3}
  ]);
  const [age, setAge] = useState(20);
  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuidv4() }])
    // ES6 short hand: if property name = value, you can write:
    // setSongs([...songs, { title, id: uuidv4() }])
  }
  // useEffect is a function that takes in here a callback function as a parameter
  // that callback function runs everytime the component renders or re-renders
  // you can use this to communicate to a database or an API endpoint.
  // every time the data changes inside the component, 
  // the callback function inside that hook will fire again
  useEffect(() => {
    console.log('useEffect hook ran', songs);
  }, [songs]) // limit callback function to songs
  useEffect(() => {
    console.log('useEffect hook ran', age);
  }, [age]) // limit callback function to songs
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return(<li key={song.id}>{song.title}</li>)
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
}

export default SongList;
