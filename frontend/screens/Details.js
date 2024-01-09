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
  Image,
  TextInput,
} from 'react-native';
import colors from '../assets/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import locations from '../assets/locations'
import learnMoreData from '../assets/learnMoreData';
import { useData } from '../context/DataContext';

const height = Dimensions.get('window').height;
Feather.loadFont();
Entypo.loadFont();


const Details = ({navigation, route}) => {
    const [refresh, setRefresh] = useState(false); // State to trigger re-render
    const { userData } = useData(); // Get setUserData from context
    const [averageReview, setAverageReview] = useState(4);
    const [reviewText, setReviewText] = useState(''); // State to store review text
    const [wishlist, setWishlist] = useState(false)
    const [submittedReviews, setSubmittedReviews] = useState([]); // State to store submitted reviews
    const [dataBaseReviews, setDataBaseReviews] = useState([])
    const {location } = route.params

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


      const handleHeart = async () => {
        setWishlist(!wishlist);
      
        const tempWish = dataBaseReviews.wishlist || []; // Ensure tempWish is initialized as an array
       if(wishlist == true){
                tempWish.push(locations[0].title); // Push new value into the array
                console.log("Here we are going to console log")
                console.log(tempWish)
                const apiUrl = 'http://143.248.192.155:5000/wishlist'; // Replace with your backend API endpoint
            
                try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                    name: userData[0],
                    wishlist: tempWish,
                    }),
                });
            
                if (response.ok) {
                    const responseData = await response.json();
                    console.log('Review sent to backend:', responseData);
                } else {
                    console.error('Failed to send review to backend');
                }
                } catch (error) {
                console.error('Error sending review to backend:', error);
                }
            }
            else {
                const updatedWish = tempWish.filter(item => item !== locations[0].title); // Remove 'guam' from the array if wishlist is false
            
                const apiUrl = 'http://143.248.192.155:5000/wishlist'; // Replace with your backend API endpoint
            
                try {
                  const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      name: userData[0],
                      wishlist: updatedWish,
                    }),
                  });
            
                  if (response.ok) {
                    const responseData = await response.json();
                    console.log('Updated wishlist sent to backend:', responseData);
                  } else {
                    console.error('Failed to send updated wishlist to backend');
                  }
                } catch (error) {
                  console.error('Error sending updated wishlist to backend:', error);
                }
              }
       }

       const handleMap = () => {
        navigation.navigate('Map', {
          famous: location,
        })}
        

    const [displayComponent, setDisplayComponent] = useState('info');


    const renderInfoComponent = () => (
        <View style={styles.learnMoreWrapper}>
            
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={location.famous}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
    );
    const [defaultRating, setdefaultRating] = useState(4)
    const [MydefaultRating, setMydefaultRating] = useState(5)
    const [maxRating, setmaxRating] = useState([1,2,3,4,5])

    const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
    const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'
    

      const handleSubmit = async () => {
        const apiUrl = 'http://143.248.192.155:5000/reviewSubmit'; // Replace with your backend API endpoint
        
        try {

          console.log('This is the handleSubmit function entry');
      
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: userData[0],
              [location.title] : reviewText,
              star: MydefaultRating
            }),
          });
      
          if (response.ok) {
            // Request was successful
            const responseData = await response.json();
            // Handle response data if needed
            console.log('Review sent to backend:', responseData);
            alert('리뷰 등록되었습니다!');
            setSubmittedReviews([...submittedReviews, { review: reviewText, star: MydefaultRating }]);


          } else {
            // Handle errors for non-2xx responses
            console.error('Failed to send review to backend');
          }
        } catch (error) {
          // Handle network errors or other issues
          console.error('Error sending review to backend:', error);
        }
        setRefresh((prevState) => !prevState);

      };
     
        const handleReview = async () => {
          const apiUrl = 'http://143.248.192.155:5000/userReviews'; // Replace with your backend API endpoint
          
          try {
  
            console.log('This is the handleReview');
        
            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                where: location.title
              }),
            });
        
            if (response.ok) {
              // Request was successful
              const newreviews = await response.json();
              // setDataBaseReviews[newreviews]
                  // Review is not null, use it
              console.log('Raw data from :', newreviews);
              setDataBaseReviews(newreviews)

              console.log('Review from backend:', dataBaseReviews);

            } else {
              // Handle errors for non-2xx responses
              console.error('Backend response is empty');
            }
          } catch (error) {
            // Handle network errors or other issues
            console.error('Error sending title to backend:', error);
          }

        };



      useEffect(() => {
        handleReview();
      }, [refresh]);

      useEffect(() => {
        renderReviewComponent()
      }, [dataBaseReviews])


    const renderReviewComponent = () => (

        
        // Replace this with your desired review component
        <SafeAreaView style={styles.reviewcontainer}>
        <Text style={styles.reviewtext}>괌 리뷰</Text>
            <View style={styles.reviewbox}>
                    <Text style={styles.reviewstar}>
                {averageReview + '/' + maxRating.length}
                    </Text>
                    <View style={styles.CustomRatingBarStyle}>
                    {maxRating.map((item, key) => (
                        <View
                        key={item}
                        onPress={() => setdefaultRating(item)}
                        >
                        <Image
                            style={styles.starImgStyle}
                            source={
                            item <= averageReview
                                ? { uri: starImgFilled }
                                : { uri: starImgCorner }
                            }
                        />
                        </View>
                    ))}
                    </View>
                </View>
                
                <View style={{ flex: 1, marginHorizontal: 22 }}>
                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            marginVertical: 12,
                            color: 'black'
                        }}>
                            나의 리뷰 작성하기
                        </Text>
                            <View style={styles.mybox}>
                                <Text style={styles.mystar}>
                            {MydefaultRating + '/' + maxRating.length}
                                </Text>
                                    <View style={styles.MyCustomRatingBarStyle}>
                                    {maxRating.map((item, key) => (
                                        <TouchableOpacity
                                        key={item}
                                        onPress={() => setMydefaultRating(item)}
                                        >
                                        <Image
                                            style={styles.MystarImgStyle}
                                            source={
                                            item <= MydefaultRating
                                                ? { uri: starImgFilled }
                                                : { uri: starImgCorner }
                                            }
                                        />
                                        </TouchableOpacity>
                                    ))}
                                    </View> 
                            </View>

                        <Text style={{
                            fontSize: 16,
                            color: 'black'
                        }}>{locations[0].title}에서의 시간이 어땠는지 작성해 보아요!</Text>
                    </View>

                    <View style={{ marginBottom: 12 }}>

                        <View style={{
                            width: "100%",
                            height: 48,
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 8,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingLeft: 22
                        }}>
                            <TextInput
                                placeholder='작성하기'
                                placeholderTextColor={'black'}
                                keyboardType='default'
                                style={{
                                    width: "100%"
                                }}
                                value={reviewText} // Set the value of TextInput to reviewText state
                                onChangeText={(text) => setReviewText(text)} // Update reviewText state on input change
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.buttonWrapper}
                            onPress={() => handleSubmit()}>
                            <Text style={styles.buttonText}>제출하기</Text>
                        </TouchableOpacity>
                    </View>

            </View>
            <View style={{ marginTop: 20, marginHorizontal: 22 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>Submitted Reviews</Text>
      {dataBaseReviews.map((review, index) => (        
        <View key={index} style={{ marginBottom: 20 }}>
          <View style={styles.mybox}>
                                <Text style={styles.mystar}>
                            {review.star + '/' + maxRating.length}
                                </Text>
                                    <View style={styles.MyCustomRatingBarStyle}>
                                    {maxRating.map((item, key) => (
                                        <View
                                        key={item}
                                        onPress={() => setMydefaultRating(item)}
                                        >
                                        <Image
                                            style={styles.MystarImgStyle}
                                            source={
                                            item <= review.star
                                                ? { uri: starImgFilled }
                                                : { uri: starImgCorner }
                                            }
                                        />
                                        </View>
                                    ))}
                                    </View> 

                            </View>
                                    <View style={styles.profileContainer}>
                                        <Image source={{ uri: review.profile_image }} style={styles.profileImage} />
                                        <Text style={{ fontSize: 18, color: 'black', marginBottom: 5 }}>
                                            {review.review}
                                        </Text>
                                    </View>
                </View>
                ))}
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
      <ImageBackground source={{uri: location.image}} style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.titlesWrapper}>
          <Text style={styles.itemTitle}>{location.title}</Text>
          <View style={styles.locationWrapper}>
            <Entypo name="location-pin" size={24} color={colors.white} />
            <Text style={styles.locationText}>{location.geo}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <TouchableOpacity style={styles.heartWrapper} onPress={handleHeart}>
          <Entypo name="heart" size={32} color={wishlist ? 'red' : 'gray'} />
        </TouchableOpacity>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{location.title}</Text>
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
    fontSize: 32,
    color: colors.white,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
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
    fontSize: 24,
    color: colors.black,
  },
  descriptionText: {
    marginTop: 20,
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
    fontSize: 12,
    color: colors.gray,
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


export default Details;