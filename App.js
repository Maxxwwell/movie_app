/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/screens/Home';
import Detail from './src/components/screens/Detail';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/utils/theme';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>

          <Stack.Navigator>

            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />

          </Stack.Navigator>

        </NavigationContainer>
      </ThemeProvider>

    </>
  )
    ;
};
export default App;
