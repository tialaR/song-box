import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ImageBackground, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AlbumCard from '../../components/AlbumCard';
import SectionTitle from '../../components/SectionTitle';
import api from '../../service/api';
import { colors } from '../../styles/colors';
import { ScroollGradient } from './styles';

const AlbumsScreen = ({ navigation, route }) => {
  const [albums, setAlbums] = useState([]);

  const { width, height } = Dimensions.get('window');
  const pictureHeight = width * 1.0;
  const startListPosition = pictureHeight - 110;

  useEffect(() => {
    console.warn(route.params);
    loadAlbums(route.params.artist.id);
  }, []);

  function loadAlbums(artist) {
    api
      .get(`/artist/${artist}/albums`)
      .then((response) => {
        const data = JSON.stringify(response.data.data, [
          'id',
          'title',
          'cover_medium',
          'release_date',
          'tracklist',
        ]);
        console.warn(response.data.data);
        setAlbums(JSON.parse(data));
      })
      .catch((err) => {
        console.warn('error', err);
      });
  }

  return (
    <ImageBackground
      resizeMode="contain"
      style={{
        flex: 1,
        width: width,
        height: pictureHeight,
        backgroundColor: colors.background,
      }}
      source={{ uri: route.params.artist.picture_xl }}>
      <ScroollGradient>
        <LinearGradient
          colors={[
            'rgba(250,250,250,0.0)',
            'rgba(250,250,250,0.0)',

            'rgba(250,250,250,0.1)',
            'rgba(250,250,250,0.2)',
            'rgba(250,250,250,0.4)',
            'rgba(250,250,250,0.8)',
            'rgba(250,250,250,1)',
            'rgba(250,250,250,1)',
            'rgba(250,250,250,1)',
            'rgba(250,250,250,1)',
            'rgba(250,250,250,1)',
          ]}
          style={{
            height: pictureHeight * 1.5 + 8,
            width: width,
            zIndex: 0,
          }}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          bounces={false}
          ListHeaderComponent={() => <SectionTitle>Albums</SectionTitle>}
          style={{ zIndex: 10, overflow: 'visible', marginTop: -300 }}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 20,
          }}
          data={albums}
          renderItem={({ item, index }) => (
            <View
              style={{
                backgroundColor:
                  index === 0 ? 'transparent' : colors.background,
              }}>
              <AlbumCard
                index={index}
                onPress={() =>
                  navigation.push('AlbumScreen', {
                    album: item,
                  })
                }
                album={item}
                artist={route.params.artist.name}
              />
            </View>
          )}
          keyExtractor={(item) => item.ind}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 16,
                backgroundColor: colors.background,
              }}
            />
          )}
        />
      </ScroollGradient>
    </ImageBackground>
  );
};

export default AlbumsScreen;
