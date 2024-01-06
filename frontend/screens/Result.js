import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

function Result({navigation}) {
    return (
      <View>
        <Text> Result Page </Text>
        <Button title="Go to Detail Page" onPress={() => navigation.navigate('Detail')} />
      </View>
    )
  }

export default Result
