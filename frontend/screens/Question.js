import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

function Question({navigation}) {

    return (
      <View>
        <Text> Question </Text>
        <Button title="Go to Result" onPress={() => navigation.navigate('Result')} />
      </View>
    )
  }

export default Question
