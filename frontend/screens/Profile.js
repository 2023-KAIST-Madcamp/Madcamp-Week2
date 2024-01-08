import React, { useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useData } from '../context/DataContext';

function Profile({ navigation }) {
  const [data, setData] = useState([]);
  const { userData } = useData(); // Get setUserData from context

  useEffect(() => {
    fetch('http://143.248.197.75:5001/result')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  }, []);

  const handleHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text> {userData[0]}</Text>
      <Text> {data}</Text>
      <Button title="홈으로 이동!" onPress={handleHome} />
    </View>
  );
}

export default Profile;