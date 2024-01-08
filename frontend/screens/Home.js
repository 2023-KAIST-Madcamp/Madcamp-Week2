import React, { Component, useState } from 'react'
import { Text, View , Button, FlatList, TouchableOpacity, Modal} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import { useData } from '../context/DataContext';

export default function Home({navigation}) {

      const handleStart = () => {
        navigation.navigate('Question')
      }

    // const Stack = createNativeStackNavigator();
    const { userData, setUserData } = useData();


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>{userData[0]}</Text>
        <Button
        title="Start"
        onPress={handleStart}
      />
      </View>
    );
  }