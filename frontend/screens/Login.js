import React from 'react';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native'
import { useData } from '../context/DataContext';

const REST_API_KEY = '12bbac899de85f22c958c86e7317727d';
const REDIRECT_URI = 'https://example.com/oauthtravel';

const Login = () => {
  const navigation = useNavigation();
  const { setUserData } = useData(); // Get setUserData from context

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
        setUserData(responseData); // Store responseData in the context
        navigation.navigate('Profile')
      } else {
        // Handle errors for non-2xx responses
        console.error('Failed to send token to backend');
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error('Error sending token to backend:', error);
    }


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

  return(
    <WebView
      source={{
        uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
      }}
      injectedJavaScript={'window.ReactNativeWebView.postMessage("message from webView")'}
      javaScriptEnabled

      onShouldStartLoadWithRequest={handleShouldStartLoad}
    />
  )  
};

export default Login;