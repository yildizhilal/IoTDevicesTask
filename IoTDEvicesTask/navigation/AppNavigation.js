import * as React from 'react';
import { View, Text ,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "../screens/HomePage";
import Login from '../screens/Login';
import LogListPage from '../screens/LogListPage';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTransparent: true,
            headerTitle: "IoT Devices App",
          }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerTransparent: true,
            headerTitle: "Cihaz Listem",
          }}
        />
          <Stack.Screen
          name="LogListPage"
          component={LogListPage}
          options={{
            headerTransparent: true,
            headerTitle: "Cihaz Log Listem",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;