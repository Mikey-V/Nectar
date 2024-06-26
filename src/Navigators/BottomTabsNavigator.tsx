import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


//BottomTabs
import { Library } from '../screens/Library'
import { WelcomeScreen } from '../screens/WelcomeScreen'
import { Explorar } from '../screens/Explorar'



const Tab = createBottomTabNavigator();

export function BottomTabsNavigator() {
  return (
    <Tab.Navigator initialRouteName='Bienvenida'>
      <Tab.Screen name="NeoWs" component={Library} options={{
        tabBarLabel: "NeoWs",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='bookmark-box-multiple' color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Bienvenida" component={WelcomeScreen} options={{
        tabBarLabel: "Bienvenida",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='hand-wave' color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Epic Photos" component={Explorar} options={{
        tabBarLabel: "Epic Photos",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='web' color={color} size={size} />
        )
      }} />
    </Tab.Navigator>
  );
}