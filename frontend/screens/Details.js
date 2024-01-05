import React, { Component, useEffect, useState } from 'react'
import { Text, View , Button} from 'react-native'
import { useData } from '../context/DataContext'
import axios from 'axios';

export default function Details({ navigation}) {

    const { selectedItem } = useData();
    const [data, setData] = useState()

    

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async() => {
        try {
            const response = await axios.get('http://143.248.192.155:5000/') // This needs to be local ip address
            console.log("This is our data ")
            console.log(response.data)

            setData(response.data)
        } catch(error) {
            console.log(error.message)
        }
    };
    console.log("Hello")
    console.log(data)

 
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <View>
            {data ? (
                <View>
                    <Text>Data from backend:</Text>
                    <Text>{data.message}</Text>
                </View>
            ) : (
                <Text>Loading...</Text>
            )}
    </View>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    )
  }
