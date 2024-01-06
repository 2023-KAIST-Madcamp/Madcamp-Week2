import React, { Component, useState } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
import { Avatar, Card, } from 'react-native-paper';
import CardPage from './CardPage'

function Question({navigation}) {

    const responseList = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
    [0,0],[0,0],[0,0],[0,0],]
    const [recommendData, setRecommendData] = useState()

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    const questionResults = async () => {
        const apiUrl = 'http://143.248.192.155:5000/recommend'; // Replace with your backend API endpoint
    
        try {
    
    
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(responseList),
          });
          
    
        } catch (error) {
          // Handle network errors or other issues
          console.error('Error sending answers to backend', error);
        }
        navigation.navigate('Result')
    
      };
    return (
    <View>
        <ScrollView>
            <Text> Question </Text>
                    {Array.from({ length: 10 }, (_, index) => (
                        <CardPage key={index} />
                    ))}

            <Button title="Go to Result" onPress={questionResults}/>

        </ScrollView>
    </View>

       
    )
  }

export default Question
