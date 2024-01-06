import React, { Component } from 'react'
import { Text, View , Button} from 'react-native'
import { Avatar, Card } from 'react-native-paper'

function CardPage() {

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    return (
      <View>
        <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                <Text variant="titleLarge"></Text>
                <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                <Button title="Cancel"></Button>
                <Button title="Ok"></Button>
                </Card.Actions>
            </Card>
      </View>
    )
  }

  export default CardPage
