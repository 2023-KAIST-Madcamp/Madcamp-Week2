import React from 'react';
import { WebView } from 'react-native-webview';
import qs from 'qs'
import axios from 'axios'
import { useData } from '../context/DataContext';
import { DataProvider } from '../context/DataContext';

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

    if (response.ok) {
      // Request was successful
      const responseData = await response.json();
      // Handle response data if needed
      console.log('Token sent to backend:', responseData);
      
      console.log(typeof(responseData))
      console.log(responseData[0])



    } else {
      // Handle errors for non-2xx responses
      console.error('Failed to send token to backend');
    }
  } catch (error) {
    // Handle network errors or other issues
    console.error('Error sending token to backend:', error);
  }



};
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

  const options ={
    grant_type: 'authorization_code',
    client_id:REST_API_KEY,
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