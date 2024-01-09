import React, { useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, ScrollView,  
  ImageBackground,
  Dimensions,  FlatList,

   } from 'react-native';
import { useData } from '../context/DataContext';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors';
import locations from '../assets/locations'
import learnMoreData from '../assets/learnMoreData';
import location from '../assets/locations'

const height = Dimensions.get('window').height;
Feather.loadFont();
Entypo.loadFont();
function Profile({ navigation }) {
  const [data, setData] = useState([]);
  const { userData } = useData(); // Get setUserData from context

  const renderLearnMoreItem = ({item}) => {
    return (
        <TouchableOpacity onPress={() =>
          navigation.navigate('Details', {
            location: item,
          })}>
      <ImageBackground
        source={{uri: item.image}}
        style={[
          styles.learnMoreItem,
          {
            marginLeft: item.id === 'learnMore-1' ? 20 : 0,
          },
        ]}
        imageStyle={styles.learnMoreItemImage}>
           {/* Heart icon */}
        <View style={styles.heartIconContainer}>
        <Entypo name="heart" size={20} color={ 'red'} />
        </View>
        <Text style={styles.learnMoreItemText}>{item.title}</Text>
      </ImageBackground>
      </TouchableOpacity>

    );
  };

  const handleStart = () => {
    navigation.navigate('Question')
  }

  return (
<View style={styles.container}>
         <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
      <ImageBackground source={{uri: userData[1]}} style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.titlesWrapper}>
          <Text style={styles.itemTitle}>{userData[0]}</Text>
          <View style={styles.locationWrapper}>
            <Entypo name="location-pin" size={24} color={colors.white} />
            <Text style={styles.locationText}>대한민국, 대전</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
                    <TouchableOpacity
                            style={styles.buttonWrapper}
                            onPress={handleStart}>
                            <Text style={styles.buttonText}>여행지 추천 받기!</Text>
                        </TouchableOpacity>
              <Text style={styles.descriptionTitle}>Discovery</Text>
              <View style={styles.discoverItemsWrapper}>
                          <FlatList
                            data={location}
                            renderItem={renderLearnMoreItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                          />
                </View> 
          <Text style={styles.descriptionTitle}>Wish List</Text>
          <View style={styles.discoverItemsWrapper}>
                          <FlatList
                            data={location}
                            renderItem={renderLearnMoreItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                          />
                </View> 
        </View>

          <Text style={styles.descriptionTitle}>Visited Lists</Text>
          <View style={styles.discoverItemsWrapper}>
                          <FlatList
                            data={location}
                            renderItem={renderLearnMoreItem}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                          />
                </View> 

      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: colors.white,
  },
  heartIconContainer: {
    position: 'absolute',
    top: 10, // Adjust as needed to position the heart icon
    right: 10, // Adjust as needed to position the heart icon
    zIndex: 1, // Ensure it's above the image
    // Additional styling for the heart icon container
  },
  backgroundImage: {
    height: height * 0.3,
    justifyContent: 'space-between',
    
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: -20,
    borderRadius: 25,
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 60,
  },
  titlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
    marginLeft: 230
  },
  itemTitle: {
    fontSize: 32,
    color: 'white',
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontSize: 12,
    color: 'white',
  },
  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    backgroundColor: 'white',
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionTextWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  discoverItemsWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  descriptionTitle: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 15
  },
  descriptionText: {
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
    height: 85,
  },
  infoWrapper: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  infoItem: {
    backgroundColor: 'white',
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center items vertically within the TouchableOpacity
    // Other styles as needed
  },
  infoTitle: {
    fontSize: 12,
    color: 'gray',
  },
  infoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  infoText: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10
  },
  infoSubText: {
    fontSize: 14,
    color: 'gray',
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  tips: {
    flex: 1, // This makes the container take the entire available space
    flexDirection: 'row', // Align items in a row (horizontal)
    justifyContent: 'space-between', // Distribute items along the main axis (horizontal in this case)
    alignItems: 'center', // Align items along the cross axis (vertical in this case)
    padding: 20,
    marginTop: 20
  },
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    marginHorizontal: 20,
    fontSize: 24,
    color: 'black',
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20,
  },
  learnMoreItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  learnMoreItemImage: {
    borderRadius: 20,
    opacity: 0.9
    
  },
  learnMoreItemText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'white',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  reviewbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CustomRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 10
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover'
  },
  reviewtext : {
    textAlign: 'left',
    fontSize: 23,
    marginTop: 20,
    paddingLeft: 20,
    fontWeight: 'bold'

  },
  reviewstar: {
    textAlign: 'center',
    fontSize: 23,
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  mybox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  MyCustomRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 10
  },
  MystarImgStyle: {
    width: 20,
    height: 20,
    resizeMode: 'cover'
  },
  mytext : {
    textAlign: 'left',
    fontSize: 23,
    marginTop: 20,
    paddingLeft: 20,
    fontWeight: 'bold'

  },
  mystar: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 2,
    paddingLeft: 0,
    paddingRight: 20
  },
  profileImage: {
    width: 50, // Set the width as needed
    height: 50, // Set the height as needed
    borderRadius: 25, // Optional: Apply border radius for rounded images
},    
profileContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
},
profileImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 10, // Adjust margin as needed
},

});
export default Profile;