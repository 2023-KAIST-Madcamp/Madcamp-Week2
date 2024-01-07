import React, { Component , useState, useEffect} from 'react'
import { Text, View, Button, StyleSheet, ActivityIndicator  } from 'react-native'
import LottieView from "lottie-react-native";

function LoadingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
      <LottieView source={require("../assets/loading.json")} autoPlay loop  style={{ height: 200 }} />
    </View>
  );
}
function Result({navigation}) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (fetching data, performing operations, etc.)
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after some time (simulating data fetching)
    }, 2000); // Simulating a 2-second loading time
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Navigate to the next screen once isLoading becomes false (loading is completed)
      navigation.navigate('Result');
    }
  }, [isLoading, navigation]);


      const handleProfile = () => {
        navigation.navigate('Profile')
      }

      const handleDetails = () => {
        navigation.navigate('Details')
      }
    return (

      isLoading ? <LoadingScreen />  :
        <View style={styles.container}>

                <Button title="프로필 이동!" onPress={handleProfile}/>
                <Button title="디테일로 이동!" onPress={handleDetails}/>

      </View>
    );
    }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      mapContainer: {
        width: '80%', // Adjust the width of the container
        height: '50%', // Adjust the height of the container
        borderRadius: 10,
        overflow: 'hidden',
      },
      map: {
        flex: 1,
      },
  });
export default Result
