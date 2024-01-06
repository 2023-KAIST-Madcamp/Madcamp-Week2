import React, { Component, useState } from 'react'
import { Text, View , Button, FlatList, TouchableOpacity, Modal, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'

import { useData } from '../context/DataContext';

const REST_API_KEY = '12bbac899de85f22c958c86e7317727d';
const REDIRECT_URI = 'https://example.com/oauthtravel';

export default function Home({navigation}) {
  const[modalOpen, setModalOpen] = useState(false);
  const { setSelectedItem } = useData();
  // const handlePress = (item) => {
  //     setSelectedItem(item);
  //     navigation.navigate('Details');
  //   };

  const sendTokenToBackend = async (options) => {
    const apiUrl = 'http://143.248.197.67:5001/user'; // Replace with your backend API endpoint

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
        // Handle response data if needed
        console.log('Token sent to backend:', responseData);
        navigation.navigate('Home')
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

  
  const handleStart = () => {
    navigation.navigate('Question')
  }

  const [reviews, setReviews] = useState([
      {title: 'Jinsuk Park is my name', rating: 5, body: 'fjkdlfjdklfj', key: '1'},
      {title: 'Jdjfdkfjdkl', rating: 3, body: 'fjkdlfjdklfdfdfj', key: '2'}
  ]) 

  // const Stack = createNativeStackNavigator();


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
      <MaterialIcons
        name = 'login'
        size = {24}
        onPress = {() => setModalOpen(true)}
      />
      <Text>Home Screen</Text>
        {/* <Modal> */}
        {/* <FlatList
            data={reviews}
            renderItem={({item})=> (
                <TouchableOpacity onPress={handlePress(item)}>
                    <Text>
                        {item.title}

                    </Text>
                </TouchableOpacity>
            )} /> */}
        <Button
        title="Start"
        onPress={handleStart}
        />
      {/* </Modal> */}
    </View>
  );
}
