import React, { Component } from 'react'
import { Text, View , Button} from 'react-native'
import {WebView} from 'react-native-webview'

const REST_API_KEY = '12bbac899de85f22c958c86e7317727d'
const REDIRECT_URI = 'https://example.com/oauthtravel'

const INJECTED_JAVASCRIPT = 'window.ReactNativeWebView.postMessage("message from webView")';

const requestToken = async (code) => {
    const requestToknUrl = 'https://kauth.kakao.com/oauth/token';
  
    const options = qs.stringify({
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code,
    });
  
    try {
      const tokenResponse = await axios.post(requestTokenUrl, options);
      const ACCESS_TOKEN = tokenResponse.data.access_token;
  
      const body = {
        ACCESS_TOKEN,
      };
      const response = await axios.post(REDIRECT_URI, body);
      const value = response.data;
      const result = await storeUser(value);
      if (result === 'stored') {
        const user = await getData('user');
        dispatch(read_S(user));
        await navigation.navigate('Main');
      }
    } catch (e) {
      console.log(e);
    }
  };
  

const getCode = (target) => {
    const exp = 'code=';
    const condition = target.indexOf(exp);
    if (condition !== -1) {
      const requestCode = target.substring(condition + exp.length);
      requestToken(requestCode);
    }
  };

function Login({navigation}) {
    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    // <Text>Login Page</Text>
            // <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <View style={{ flex: 1 }}>
                <WebView
                    source={{
                    uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
                    }}
                    injectedJavaScript={INJECTED_JAVASCRIPT}
                    javaScriptEnabled
                    onMessage={event => {
                    const data = event.nativeEvent.url;
                getCode(data);
                }}
                />
            {/* </View> */}
        </View>
        

    )
}

export default Login

