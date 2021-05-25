import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import Imovel1 from './src/screens/Imovel1';
import NotificationScreen from './src/screens/NotificationScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
          
        <Stack.Screen
            name="Notificação"
            component={NotificationScreen}
          />
      
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
          /> 

          <Stack.Screen
            name="Imóvel 1"
            component={Imovel1}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;