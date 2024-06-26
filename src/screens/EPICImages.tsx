// EPICImages.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';

export const EPICImages = () => {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    const fetchEPICImages = async () => {
      try {
        const response = await axios.get('https://epic.gsfc.nasa.gov/api/natural');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching EPIC images:', error);
      }
    };

    fetchEPICImages();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <Image source={{ uri: `https://epic.gsfc.nasa.gov/archive/natural/${item.date.slice(0, 4)}/${item.date.slice(5, 7)}/${item.date.slice(8, 10)}/png/${item.image}.png` }} style={styles.image} />
  );

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.image}
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
