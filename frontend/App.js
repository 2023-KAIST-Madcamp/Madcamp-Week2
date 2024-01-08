// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DataProvider } from './context/DataContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Details from './screens/Details';
import Login from './screens/Login';
import Question from './screens/Question';
import Profile from './screens/Profile'
import Result from './screens/Result'
import RecoQuestion from './screens/RecoQuestion'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name = "Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name = "Details" component={Details} options={{ headerShown: false }}/>
          <Stack.Screen name = "Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name = "Profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name = "Question" component={Question}/>
          <Stack.Screen name = "Result" component={Result}options={{ headerShown: false }}/>
          <Stack.Screen name = "RecoQuestion" component={RecoQuestion} />
          <Stack.Screen name = "Map" component={Map}/>

        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>

  );
}

export default App;