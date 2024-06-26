// MarsRoverPhotos.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';

export const MarsRoverPhotos = () => {
  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      try {
        const roverName = 'curiosity';
        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos`, {
          params: {
            sol: 1000,
            api_key: 'z2uiWe5Kff5LCmcrD4E0b6NvVLoUfMIokUO85zrZ',
            page: 1,
            per_page: 20,
          },
        });
        setPhotos(response.data.photos.slice(0, 20));
      } catch (error) {
        console.error('Error fetching Mars Rover photos:', error);
      }
    };

    fetchRoverPhotos();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <Image source={{ uri: item.img_src }} style={styles.image} />
  );

  return (
    <FlatList
      data={photos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: Dimensions.get('window').width / 2 - 15,
    height: Dimensions.get('window').width / 2 - 15,
    margin: 5,
    borderRadius: 10,
  },
});
