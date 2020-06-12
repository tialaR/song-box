import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ArtistCard from '../../components/ArtistCard';
import SectionTitle from '../../components/SectionTitle';
import api from '../../service/api';
import { colors } from '../../styles/colors';

const ArtistsScreen = ({ navigation, route }) => {
  const [artists, setArtists] = useState([]);
  const [artist, setArtist] = useState(1);

  const { width } = Dimensions.get('window');
  const pictureWidth = width - 80;
  const pictureHeight = pictureWidth * 0.5;

  useEffect(() => {
    loadArtists();
  }, []);

  function renderItem({ item }) {
    return (
      <>
        {item.name != null &&
          item.picture_medium !== '' &&
          item.picture_medium !== '' &&
          item.picture_medium != null && (
            <ArtistCard
              name={item.name}
              image={item.picture_medium}
              onPress={() =>
                navigation.push('AlbumsScreen', {
                  artist: item,
                })
              }
            />
          )}
      </>
    );
  }

  function loadArtists() {
    for (let i = 1; i < 21; i++) {
      api
        .get(`/artist/${i}`)
        .then((response) => {
          //console.warn(response.data);
          const data =
            response.data.picture_medium != null &&
            JSON.stringify(response.data, [
              'id',
              'name',
              'picture_medium',
              'picture_xl',
            ]);
          const dataAux = JSON.parse(data);
          setArtists((oldArray) => [...oldArray, dataAux]);
        })
        .catch((err) => {
          console.warn('error', err);
        });
    }
  }

  return (
    <FlatList
      bounces={false}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => <SectionTitle>Artists</SectionTitle>}
      numColumns={2}
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 20,
        alignItems: 'center',
      }}
      data={artists}
      renderItem={({ item }) => (
        <>
          {item.name != null &&
            item.picture_medium !== '' &&
            item.picture_medium !== '' &&
            item.picture_medium != null && (
              <ArtistCard
                name={item.name}
                image={item.picture_medium}
                onPress={() =>
                  navigation.push('AlbumsScreen', {
                    artist: item,
                  })
                }
              />
            )}
        </>
      )}
      keyExtractor={(item) => item.ind}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
    />
  );
};

export default ArtistsScreen;
