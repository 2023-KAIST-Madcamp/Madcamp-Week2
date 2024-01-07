import React, { Component, useState } from 'react'
import { Text, View , Button, FlatList, TouchableOpacity, Modal} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import { useData } from '../context/DataContext';

export default function Home({navigation}) {
    // const { setSelectedItem } = useData();
    // const handlePress = (item) => {
    //     setSelectedItem(item);
    //     navigation.navigate('Details');
    //   };

      const handleStart = () => {
        navigation.navigate('Question')
      }

    const [reviews, setReviews] = useState([
        {title: 'Jinsuk Park is my name', rating: 5, body: 'fjkdlfjdklfj', key: '1'},
        {title: 'Jdjfdkfjdkl', rating: 3, body: 'fjkdlfjdklfdfdfj', key: '2'}
    ]) 

    // const Stack = createNativeStackNavigator();
    const { userData, setUserData } = useData();


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>{userData[0]}</Text>
        {/* <FlatList
            data={reviews}
            renderItem={({item})=> (
                <TouchableOpacity onPress={handlePress(item)}>
                    <Text>
                        {item.title}

                    </Text>
                </TouchableOpacity>
            )} /> */}
        <Button
        title="Start"
        onPress={handleStart}
      />
      </View>
    );
  }