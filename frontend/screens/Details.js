import React, { Component, useEffect, useState, useContext } from 'react'
import { Text, View , Button} from 'react-native'
import { useData } from '../context/DataContext'
import axios from 'axios';
import { DataProvider } from '../context/DataContext'

// POST - Update MongoDB (Initiated when button is pressed)
const sendDataToBackend = async() => {
    const dataToSend = {
        name: 'Jinsuk Park',
        age: 25,
      };

try {
    const response = await axios.post('http://143.248.197.75:5001/login', dataToSend)
    console.log(response.data); // Log the response from the server
  } catch (error) {
    console.error('Error:', error);
  }
}




export default function Details({ navigation}) {

    const { selectedItem } = useData();
    const [data, setData] = useState()
    
    const { userData, setUserData } = useData();

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async() => {
        try {
            const response = await axios.get('http://143.248.197.75:5001/') // This needs to be local ip address
            // const response = await axios.get('http://127.0.0.1:5000/') // This needs to be local ip address
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
      <Button title="Send data to backend" onPress={sendDataToBackend} />
      </View>
    )
  }
