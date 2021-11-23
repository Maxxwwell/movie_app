/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/screens/Home';
import Detail from './src/components/screens/Detail';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={Home} />
        <Stack.Screen name = "Detail" component={Detail} />

      </Stack.Navigator>

    </NavigationContainer>
  )
    ;
};
export default App;
