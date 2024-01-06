import React from 'react';
import { WebView } from 'react-native-webview';
import qs from 'qs'
import axios from 'axios'

const REST_API_KEY = '12bbac899de85f22c958c86e7317727d';
const REDIRECT_URI = 'https://example.com/oauthtravel';

const sendTokenToBackend = async (options) => {
  const apiUrl = 'http://143.248.192.155:5000/user'; // Replace with your backend API endpoint

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
      // Request was successful
      const responseData = await response.json();
      // Handle response data if needed
      console.log('Token sent to backend:', responseData);
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
// gQOZH4YaUxd6Z_IzkCWGd7UYZRDdIk9AjJL0QzOc44q4tdreiFFe4q6IyUgKKiWOAAABjNqYlnFV7imzm104lw
const getCode = (target) => {
  const exp = 'code=';
  const condition = target.indexOf(exp);
  if (condition !== -1) {
    const requestCode = target.substring(condition + 5);
    console.log("This is the getCode requestCode value: " + requestCode)
    requestToken(requestCode);
  }
};

const requestToken = async (requestCode) => {
  const requestToknUrl = 'https://kauth.kakao.com/oauth/token';

//   const options = qs.stringify({
//     grant_type: 'authorization_code',
//     client_id:REST_API_KEY,
//     redirect_uri: REDIRECT_URI,
//     Content_type: 'application/x-www-form-urlencoded;charset=utf-8',
//     code: requestCode
    
//   });
  const options ={
    grant_type: 'authorization_code',
    client_id:REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    Content_type: 'application/x-www-form-urlencoded;charset=utf-8',
    code: requestCode
    
  };

  try {
    // console.log("We are trying to get the tokenresponse")
    // const tokenResponse = await axios.post(requestToknUrl, options);
    // console.log("We are trying to get the accesstoken")
    // const ACCESS_TOKEN = tokenResponse.data.access_token;
    // console.log("This is the ACCESS_TOKEN" + ACCESS_TOKEN)

    // const body = {
    //   ACCESS_TOKEN,
    // };
    // const response = await axios.post(REDIRECT_URI, body);
    // const value = response.data;
    // console.log("This is the value")
    // console.log(value)
    // const result = await storeUser(value);
    // console.log("This is the result: " + result)
    // if (result === 'stored') {
    //   const user = await getData('user');
    //   console.log("This is the user data: " + user)
    //   dispatch(read_S(user));
        // await navigation.navigate('Home');
        await sendTokenToBackend(options); // Send token to backend after successful authentication
    }
   catch (e) {
    console.log(e);
  }
};

const Login = () => (
  <WebView
    source={{
      uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
    }}
    injectedJavaScript={'window.ReactNativeWebView.postMessage("message from webView")'}
    javaScriptEnabled
    onMessage={(event) => {
      const data = event.nativeEvent.url;
      console.log(data)
      getCode(data);
    }}
  />
);

export default Login;