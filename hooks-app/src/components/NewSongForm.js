import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    // clear input after song added: update input state with empty string
    setTitle('');
  } 
  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
      <input type="submit" value="add song" />
    </form>
    )
}

export default NewSongForm;
