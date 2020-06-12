import React, { useEffect, useState } from 'react';
import AlbumPlayer from '../../components/AlbumPlayer';
import api from '../../service/api';

const albumType = {
  id: 0,
  title: '',
  duration: 0,
  release_date: '',
  artist: '',
  cover_medium: '',
  tracks: [],
};

const AlbumScreen = ({ route }) => {
  const [album, setAlbum] = useState(albumType);

  useEffect(() => {
    loadAlbum(route.params.album.id);
  }, []);

  function loadAlbum(albumId) {
    api
      .get(`/album/${albumId}`)
      .then((response) => {
        setAlbum({
          id: response.data.id,
          title: response.data.title,
          duration: response.data.duration,
          release_date: response.data.release_date,
          artist: response.data.artist.name,
          cover_medium: response.data.cover_medium,
          tracks: response.data.tracks.data,
        });
      })
      .catch((err) => {
        console.warn('error', err);
      });
    console.warn(album);
  }

  return (
    <>
      {album !== albumType && (
        <AlbumPlayer
          albumName={album.title}
          albumDuration={album.duration}
          albumRelese={album.release_date}
          artist={album.artist}
          trackList={album.tracks}
          albumImage={album.cover_medium}
        />
      )}
    </>
  );
};

export default AlbumScreen;
