import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Main } from './src/Main'

export default function App() {
  return (
    <NavigationContainer>
      <Main></Main>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
