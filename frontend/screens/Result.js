import React, { Component , useState, useEffect} from 'react'
import { Text, View, Button, StyleSheet, ActivityIndicator, FlatList ,TouchableOpacity, ImageBackground } from 'react-native'
import LottieView from "lottie-react-native";
import location from '../assets/locations'
import Entypo from 'react-native-vector-icons/Entypo';

function LoadingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LottieView source={require("../assets/loading.json")} autoPlay loop  style={{ height: 200 }} />
    </View>
  );
}
function Result({navigation}) {


  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const renderLearnMoreItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            location: item,
          })
        }>
        <ImageBackground
          source={{uri: item.image}}
          style={[
            styles.discoverItem,
            {marginLeft: item.id === 'discover-1' ? 20 : 0},
          ]}
          imageStyle={styles.discoverItemImage}>
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name="location-pin" size={18} />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    fetch('http://143.248.192.155:5000/userReviews')
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


      const handleHome = () => {
        navigation.navigate('Home')
      }

    return (

      isLoading ? <LoadingScreen />  :
      <View style={styles.container}>
          <View style={{ justifyContent: 'flex-start', alignItems: 'center', marginTop: 50 }}>
            <View style={{marginTop: 40}}>
              <Text style={{fontSize: 34}}>추천 여행지!</Text>
            </View>
        
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <LottieView source={require("../assets/plane.json")} autoPlay loop style={{ height: 80 }} />
            </View>
            <Button title="프로필 이동!" onPress={handleHome}/>

          </View>

          <View style={styles.discoverItemsWrapper}>
            <FlatList
              data={location}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View> 

          <Button title="추천 다시 받기!" styles={{}} onPress={handleHome}/>
        </View>
        
    );
    }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      discoverItemsWrapper: {
        paddingVertical: 20,
        paddingHorizontal: 20
      },
      discoverItem: {
        width: 170,
        height: 300,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginRight: 20,
      },
      discoverItemImage: {
        borderRadius: 20,
      },
      discoverItemTitle: {
        fontSize: 28,
        color: 'white'
      },
      discoverItemLocationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        color: 'white'
      },
      discoverItemLocationText: {
        marginLeft: 5,
        fontFamily: 'Lato-Bold',
        fontSize: 14,
      },
   
  
  });
export default Result
