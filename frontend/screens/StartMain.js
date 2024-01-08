import React, { Component, useState } from 'react'
import { Text, View , Button, FlatList, TouchableOpacity, Modal, StyleSheet, Pressable} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles"
import { useData } from '../context/DataContext';


const REST_API_KEY = '12bbac899de85f22c958c86e7317727d';
const REDIRECT_URI = 'https://example.com/oauthtravel';

export default function StartMain({navigation}) {
  const[modalOpen, setModalOpen] = useState(false);
  const { setUserData } = useData();
  // const handlePress = (item) => {
  //     setSelectedItem(item);
  //     navigation.navigate('Details');
  //   };

  const sendTokenToBackend = async (options) => {
    const apiUrl = 'http://143.248.197.75:5001/user'; // Replace with your backend API endpoint

    try {

      console.log('This is the sendTokenToBackend function entry' + JSON.stringify(options.code))

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({grant_type: options.grant_type, client_id: options.client_id, 
          redirect_uri: options.redirect_uri, code: options.code}),
      });
      // console.log(response.status)
      // console.log("This is the response body: " + response.body)

      if (response.ok) {
        navigation.navigate('Home')
        // Request was successful
        const responseData = await response.json();
        // Handle response data if needed'
        setUserData(responseData);
        console.log('Token sent to backend:', responseData);
        setModalOpen(false)

      } else {
        // Handle errors for non-2xx responses
        console.error('Failed to send token to backend');
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error('Error sending token to backend:', error);
    }

      // await navigation.navigate('Home');

  };

  const handleShouldStartLoad = (event) => {
    const url = event.url;
    // url에 붙어오는 code= 가있다면 뒤부터 parse하여 인가 코드 get
    const exp = "code=";
    const searchIdx = url.indexOf(exp);
    if (searchIdx !== -1) {
      const code = url.substring(searchIdx + exp.length);
      console.log("This is the getCode requestCode value: " + code)
      requestToken(code);
      // onLogin(); // 로그인 성공 시
      return false;
    }
    return true;
  };

  const requestToken = async (requestCode) => {
    const requestToknUrl = 'https://kauth.kakao.com/oauth/token';
    const options ={
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      Content_type: 'application/x-www-form-urlencoded;charset=utf-8',
      code: requestCode
      
    };

    try {
      await sendTokenToBackend(options); // Send token to backend after successful authentication
    }
    catch (e) {
      console.log(e);
    }
  };

  


  const [reviews, setReviews] = useState([
      {title: 'Jinsuk Park is my name', rating: 5, body: 'fjkdlfjdklfj', key: '1'},
      {title: 'Jdjfdkfjdkl', rating: 3, body: 'fjkdlfjdklfdfdfj', key: '2'}
  ]) 

  // const Stack = createNativeStackNavigator();


  return (
    <View style={styles.start2}>
      <View style={[styles.blob11, styles.blob11Position]} />
      <Image
        style={styles.blob21}
        contentFit="cover"
        source={require("../assets/blob-2-1.png")}
      />
      <Pressable
        style={[styles.bichatFillParent, styles.blob11Position]}
        onPress={() => setModalOpen(true)}
      >
        <Image
          style={styles.bichatFillIcon}
          contentFit="cover"
          source={require("../assets/bichatfill.png")}
        />
        <Text style={styles.text}>카카오로 로그인하기</Text>
      </Pressable>
      <Text style={[styles.findMyTrip, styles.blob11Position]}>
        Find My Trip
      </Text>
      <Image
        style={[styles.undrawAircraftReM05i11, styles.blob11Position]}
        contentFit="cover"
        source={require("../assets/undraw-aircraft-re-m05i-1-1.png")}
      />
      <Modal visible={modalOpen} animationType='slide'>
        <View style={StyleSheet.modalContent}>
          <MaterialIcons
            name = 'close'
            size = {24}
            onPress = {() => setModalOpen(false)}
          />
        <WebView
          source={{
            uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
          }}
          injectedJavaScript={'window.ReactNativeWebView.postMessage("message from webView")'}
          javaScriptEnabled
          onShouldStartLoadWithRequest={handleShouldStartLoad}
        />
        </View>
      </Modal>
    </View>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    // </View>
  );
}

const styles = StyleSheet.create({
  blob11Position: {
    left: "50%",
    position: "absolute",
  },
  blob11: {
    height: "71.56%",
    marginLeft: -229,
    top: "7.5%",
    bottom: "20.94%",
    width: 458,
    overflow: "hidden",
  },
  blob21: {
    top: -306,
    left: -297,
    width: 1274,
    height: 1284,
    position: "absolute",
    overflow: "hidden",
  },
  bichatFillIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    // fontFamily: FontFamily.nanumSquareRound,
    color: Color.colorBlack,
    textAlign: "left",
    marginLeft: 10,
  },
  bichatFillParent: {
    marginTop: 171,
    marginLeft: -112,
    top: "50%",
    borderRadius: Border.br_8xs,
    backgroundColor: "#fae300",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_8xs,
    overflow: "hidden",
  },
  findMyTrip: {
    marginLeft: -146,
    top: "40.47%",
    fontSize: FontSize.size_31xl,
    // fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  undrawAircraftReM05i11: {
    height: "15.53%",
    marginLeft: -118,
    top: "22.03%",
    bottom: "62.44%",
    maxHeight: "100%",
    width: 234,
    overflow: "hidden",
  },
  start2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});
