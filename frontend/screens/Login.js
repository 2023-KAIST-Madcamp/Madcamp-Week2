import React, { Component } from 'react'
import { Text, View , Button} from 'react-native'

function Login({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Login Page</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>

    )
}

export default Login
