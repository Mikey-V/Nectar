import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


//BottomTabs
import { Biblioteca } from '../screens/Biblioteca'
import { Actualizacion } from '../screens/Actualizacion'
import { Historial } from '../screens/Historial'
import { Explorar } from '../screens/Explorar'
import { Mas } from '../screens/Mas'


const Tab = createBottomTabNavigator();

export function BottomTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Biblioteca" component={Biblioteca} options={{
        tabBarLabel: "Biblioteca",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='bookmark-box-multiple' color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Actualizacion" component={Actualizacion} options={{
        tabBarLabel: "Actualizacion",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='book-alert' color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Historial" component={Historial} options={{
        tabBarLabel: "Historial",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='history' color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Explorar" component={Explorar} options={{
        tabBarLabel: "Explorar",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='web' color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Mas" component={Mas} options={{
        tabBarLabel: "Explorar",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='dots-horizontal' color={color} size={size} />
        )
      }} />
    </Tab.Navigator>
  );
}