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
import Question from './screens/Question';
import Profile from './screens/Profile'
import Result from './screens/Result'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name = "Home" component={Home}/>
          <Stack.Screen name = "Details" component={Details}/>
          <Stack.Screen name = "Login" component={Login}/>
          <Stack.Screen name = "Profile" component={Profile}/>
          <Stack.Screen name = "Question" component={Question}/>
          <Stack.Screen name = "Result" component={Result}/>
        </Stack.Navigator>
        {/* <Tab.Navigator 
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
        </Tab.Navigator> */}
      </NavigationContainer>
    </DataProvider>
  );
}

export default App;