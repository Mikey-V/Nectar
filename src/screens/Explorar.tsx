// Explorar.tsx

import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { EPICImages } from './EPICImages'; // Ajusta la ruta según sea necesario
import { MarsRoverPhotos } from './MarsRoverPhotos'; // Ajusta la ruta según sea necesario

export const Explorar = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'EPIC Images' },
    { key: 'second', title: 'Mars Rover Photos' },
  ]);

  const renderScene = SceneMap({
    first: EPICImages,
    second: MarsRoverPhotos,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};
