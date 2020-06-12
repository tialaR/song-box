import React, { useState } from 'react';

const AlbumPlayerContext = React.createContext();

const AlbumPlayerProvider = ({ children }) => {
  const [endSong, setEndSong] = useState(false);
  const [endAnimation, setEndAnimation] = useState(false);

  return (
    <AlbumPlayerContext.Provider
      value={{
        endSong,
        setEndSong,
      }}>
      {children}
    </AlbumPlayerContext.Provider>
  );
};

export default AlbumPlayerContext;

export { AlbumPlayerProvider };

