import React, { Component, useState } from 'react'
import { Text, View , Button, FlatList, TouchableOpacity} from 'react-native'
import { useData } from '../context/DataContext';

export default function Home({navigation}) {
    const { setSelectedItem } = useData();
    const handlePress = (item) => {
        setSelectedItem(item);
        navigation.navigate('Details');
      };

    const [reviews, setReviews] = useState([
        {title: 'Jinsuk Park is my name', rating: 5, body: 'fjkdlfjdklfj', key: '1'},
        {title: 'Jdjfdkfjdkl', rating: 3, body: 'fjkdlfjdklfdfdfj', key: '2'}
    ]) 

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <FlatList
            data={reviews}
            renderItem={({item})=> (
                <TouchableOpacity onPress={handlePress(item)}>
                    <Text>
                        {item.title}

                    </Text>
                </TouchableOpacity>
            )} />
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
    );
  }