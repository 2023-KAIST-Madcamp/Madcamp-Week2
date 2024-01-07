import React, {useRef, useState , useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView ,
  Linking,
  Image
} from 'react-native';
import colors from '../assets/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import locations from '../assets/locations'
import Carousel , { ParallaxImage } from 'react-native-snap-carousel';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';
import learnMoreData from '../assets/learnMoreData';
import Stars from 'react-native-stars';


const height = Dimensions.get('window').height;
Feather.loadFont();
Entypo.loadFont();


const Details = ({navigation}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const [wishlist, setWishlist] = useState(false)

    const carouselItems = locations[0].famous      
    
      const carouselRef = useRef(null);

      const handleLink = (link) => {
        Linking.openURL(link);
      };

      const renderLearnMoreItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => handleLink(item.link)}>
          <ImageBackground
            source={{uri: item.image}}
            style={[
              styles.learnMoreItem,
              {
                marginLeft: item.id === 'learnMore-1' ? 20 : 0,
              },
            ]}
            imageStyle={styles.learnMoreItemImage}>
            <Text style={styles.learnMoreItemText}>{item.title}</Text>
          </ImageBackground>
          </TouchableOpacity>

        );
      };

    const handleHeart = () => {
        setWishlist(!wishlist)
        _renderItem = ({item, index}) => {
            return (
                <View style={styles.slide}>
                    <Text style={styles.title}>{ item.title }</Text>
                </View>
            );
        }
    }
    const handleMap = () => {
        navigation.navigate('Map')
    }
    const [displayComponent, setDisplayComponent] = useState('info');


    const renderInfoComponent = () => (
        <View style={styles.learnMoreWrapper}>
            
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
    );
    const [defaultRating, setdefaultRating] = useState(4)
    const [maxRating, setmaxRating] = useState([1,2,3,4,5])

    const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
    const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'

    const renderReviewComponent = () => (

        
        // Replace this with your desired review component
        <SafeAreaView style={styles.reviewcontainer}>
        <Text style={styles.reviewtext}>괌 리뷰</Text>
            <View style={styles.reviewbox}>
                    <Text style={styles.reviewstar}>
                {defaultRating + '/' + maxRating.length}
            </Text>
                    <View style={styles.CustomRatingBarStyle}>
                    {maxRating.map((item, key) => (
                        <TouchableOpacity
                        key={item}
                        onPress={() => setdefaultRating(item)}
                        >
                        <Image
                            style={styles.starImgStyle}
                            source={
                            item <= defaultRating
                                ? { uri: starImgFilled }
                                : { uri: starImgCorner }
                            }
                        />
                        </TouchableOpacity>
                    ))}
                    </View>
                </View>

                
        </SafeAreaView>
      );

      const handleInfoPress = () => {
        setDisplayComponent('info');
      };
    
      const handleReviewPress = () => {
        setDisplayComponent('review');
      };
    
  return (
    <View style={styles.container}>
         <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
      <ImageBackground source={{uri: locations[0].image}} style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.titlesWrapper}>
          <Text style={styles.itemTitle}>{locations[0].title}</Text>
          <View style={styles.locationWrapper}>
            <Entypo name="location-pin" size={24} color={colors.white} />
            <Text style={styles.locationText}>{locations[0].geo}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <TouchableOpacity style={styles.heartWrapper} onPress={handleHeart}>
          <Entypo name="heart" size={32} color={wishlist ? 'red' : 'gray'} />
        </TouchableOpacity>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{locations[0].title}</Text>
        </View>

        <View style={styles.infoWrapper}>
          
        <TouchableOpacity style={styles.infoItem} onPress={handleInfoPress}>
          <Entypo name="images" size={20} style={styles.icon} />
            <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>명소</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoItem} onPress={handleReviewPress}>
          <Entypo name="typing" size={20} />
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>리뷰</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoItem} onPress={handleMap}>
          <Entypo name="globe" size={20} />
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>위치</Text>
            </View>
          </TouchableOpacity>
        </View>

        </View>

        {displayComponent === 'info' ? renderInfoComponent() : renderReviewComponent()}

        {/* <View style={styles.learnMoreWrapper}>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View> */}

      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height * 0.6,
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
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
  },
  itemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.white,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: colors.white,
  },
  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    backgroundColor: colors.white,
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
  descriptionTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  descriptionText: {
    marginTop: 20,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.darkGray,
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
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: colors.gray,
  },
  infoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  infoText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: 'black',
    marginLeft: 10
  },
  infoSubText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.gray,
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
    color: colors.black,
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20,
  },
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  learnMoreItemImage: {
    borderRadius: 20,
    opacity: 0.9
    
  },
  learnMoreItemText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.white,
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
  }

});


export default Details;