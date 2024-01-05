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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'grey',
              labelStyle: { paddingBottom: 10, fontSize: 10 },
              style: { padding: 10, height: 70}
            }}>
          <Tab.Screen 
            name="Home" 
            component={Home}
            options={{title: 'Home'}} />
          <Tab.Screen 
            name="Details" 
            component={Details}
            options={{title: 'Details'}} />
          <Tab.Screen 
            name="Login" 
            component={Login}
            options={{title: 'Login'}} />
        </Tab.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}

export default App;