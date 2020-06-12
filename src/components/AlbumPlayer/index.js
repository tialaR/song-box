import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Sound from 'react-native-sound';
import { SmallDotDecorator } from '../../styles/styles';
import { dateFormaterToYear, secondsToHms } from '../../utils/utils';
import AlbumDisco from '../AlbumDisco';
import Player from '../Player';
import SongCard from '../SongCard';
import SongDescribe from '../SongDescribe';
import { AlbumPlayerProvider } from './AlbumPlayerContext';
import { Album, AlbumDetail, AlbumTitle, Artist, Container, DescriptionContainer, HeaderContainer } from './styles';

const AlbumPlayer = ({
  albumName,
  artist,
  trackList,
  albumImage,
  albumDuration,
  albumRelese,
}) => {
  const [play, setPlay] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const [urlSong, setUrlSong] = useState('');
  const [currentSong, setCurrentSong] = useState('');

  useEffect(() => {
    Sound.likeSound = new Sound(urlSong, '', (error) => {
      if (error) {
        console.log('failed to load the sound', error);
      }
    });
    return () => {
      Sound.likeSound.pause();
    };
  }, []);

  useEffect(() => {
    if (play) {
      Sound.likeSound.stop();
      Sound.likeSound = new Sound(urlSong, '', (error) => {
        if (error) {
          console.log('failed to load the sound', error);
        }
        Sound.likeSound.play(() => Sound.likeSound.release());
      });
    }
  }, [selectedSong, play, urlSong]);

  useEffect(() => {
    if (play) {
      Sound.likeSound.play();
    } else {
      Sound.likeSound.pause();
    }
  }, [play]);

  return (
    <AlbumPlayerProvider>
      <Container>
        <HeaderContainer>
          <AlbumTitle>Album</AlbumTitle>
          <Album>{albumName}</Album>
          <DescriptionContainer>
            <SmallDotDecorator />
            <Artist>{artist}</Artist>
            <SmallDotDecorator />
            <AlbumDetail>{dateFormaterToYear(albumRelese)}</AlbumDetail>
            <SmallDotDecorator />
            <AlbumDetail>{secondsToHms(albumDuration)}</AlbumDetail>
          </DescriptionContainer>
          <AlbumDisco
            selectedSong={selectedSong}
            albumImage={albumImage}
            play={play}
          />
          {currentSong !== '' && (
            <SongDescribe currentSong={currentSong} artist={artist} />
          )}
          <Player
            disabledPreviousButton={
              selectedSong === 0 || selectedSong === null ? true : false
            }
            disabledNextButton={
              selectedSong === trackList.length - 1 || selectedSong === null
                ? true
                : false
            }
            onPressPrevious={() => {
              selectedSong !== null &&
                setSelectedSong(
                  selectedSong === 0 ? selectedSong : selectedSong - 1,
                );
              setPlay(selectedSong !== null && true);
              setUrlSong(
                selectedSong === 0
                  ? selectedSong
                  : selectedSong !== null
                  ? trackList[selectedSong - 1].preview
                  : '',
              );
              setCurrentSong(
                selectedSong === 0
                  ? trackList[selectedSong].title
                  : trackList[selectedSong - 1].title,
              );
            }}
            playPauseIcon={selectedSong !== null && play && true}
            onPress={(play) => {
              setPlay(play);
              setSelectedSong(selectedSong === null ? 0 : selectedSong);
              setUrlSong(
                selectedSong === null
                  ? trackList[0].preview
                  : trackList[selectedSong].preview,
              );
              setCurrentSong(
                selectedSong === null
                  ? trackList[0].title
                  : trackList[selectedSong].title,
              );
            }}
            onPressNext={() => {
              selectedSong !== null &&
                setSelectedSong(
                  selectedSong === trackList.length - 1
                    ? selectedSong
                    : selectedSong + 1,
                );
              setPlay(selectedSong !== null && true);
              setUrlSong(
                selectedSong === trackList.length - 1
                  ? selectedSong
                  : trackList[selectedSong + 1].preview,
              );
              setCurrentSong(
                selectedSong === trackList.length - 1
                  ? trackList[selectedSong].title
                  : trackList[selectedSong + 1].title,
              );
            }}
          />
        </HeaderContainer>
        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 40,
          }}
          data={trackList}
          renderItem={({ item, index }) => (
            <SongCard
              key={index}
              showGif={play}
              selectedSong={selectedSong === index ? true : false}
              onPress={() => {
                setSelectedSong(index);
                setCurrentSong(trackList[index].title);
                setPlay(true);
                setUrlSong(trackList[index].preview);
              }}
              song={item.title}
              artist={artist}
              duration={secondsToHms(item.duration, true)}
            />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
      </Container>
    </AlbumPlayerProvider>
  );
};

export default AlbumPlayer;
