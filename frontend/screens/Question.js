import React, { Component, useState, useEffect } from 'react'
import { Text, View, Button, ScrollView, ActivityIndicator } from 'react-native'
import { Avatar, Card, } from 'react-native-paper';
import CardPage from './CardPage'

function Question({navigation}) {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate a loading process (fetching data, performing operations, etc.)
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after some time (simulating data fetching)
    }, 2000); // Simulating a 2-second loading time
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Navigate to the next screen once isLoading becomes false (loading is completed)
      navigation.navigate('NextScreen');
    }
  }, [isLoading, navigation]);

    const responseList = [[0,0,0,0,0,0],[0,0,0,0],[0,0],[0,0,0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
    [0,0],[0,0],[0,0],[0,0],]
    const [recommendData, setRecommendData] = useState()

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    const questionResults = async () => {
        const apiUrl = 'http://143.248.197.75:5000/recommend'; // Replace with your backend API endpoint
    
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

      const updateResponseList = (qNum, answer) => {
        if(qNum != null){            

                if(responseList[qNum - 1][answer - 1] == 0){
                    responseList[qNum - 1][answer - 1] = 1;
                }
                else{
                    responseList[qNum - 1][answer - 1] = 0
                }

            }

            console.log(responseList)
              
        }
        let counter = 1;
    return (

      isLoading ? <LoadingScreen />  :
    <View>
        <ScrollView>
            <Text> Question </Text>
                    {
                    Array.from({ length: 10 }, (_, index) => (
                        <CardPage key={index}
                            counter={counter++}
                            updateResponseList={updateResponseList}
                         />
                    ))}

            <Button title="추천하기!" onPress={questionResults}/>

        </ScrollView>
    </View>

       
    )
  }

export default Question
