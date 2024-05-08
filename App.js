import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStacNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />\

      </Stack.Navigator>


    </NavigationContainer>


  );
} 
export default App;


