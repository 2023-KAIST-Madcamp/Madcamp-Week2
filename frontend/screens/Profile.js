import React, {Button, useEffect, Component, useState, useContext } from 'react'
import { DataProvider } from '../context/DataContext'
import { Text, View, StyleSheet } from 'react-native'
import { useData } from '../context/DataContext';
import MapView from 'react-native-maps';


function Profile({navigation}) {
  const [data, setData] = useState([])
  const { userData } = useData(); // Get setUserData from context
 
  useEffect(() => {
    fetch('http://143.248.192.155:5000/result')
    .then((response) => {
        if(!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json()
    })
    .then((json) => {
        setData(json);
    })
    .catch((error) => {
        console.error('Error: ', error)
    })
},[]);
// const handleHome = () => {
//   navigation.navigate('Home')
// }

  
    return (
      // <View>
      //   {/* <Text> {userData[0]}</Text>
      //   <Text> {data}</Text>
      //   <Button title="홈으로 이동!" onPress={handleHome}/> */}

      // </View>
      <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '50%',
    },
  });
export default Profile
