import React from 'react'
import { Text, View, useWindowDimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view';


const FirstRoute = () => (
  <View></View>
);

const SecondRoute = () => (
  <View></View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export const Explorar = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Fuentes' },
    { key: 'second', title: 'Extensiones' },
  ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  )
}
