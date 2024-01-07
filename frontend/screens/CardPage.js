import React, { Component , useState} from 'react'
import { Text, View , Button} from 'react-native'
import { Avatar, Card } from 'react-native-paper'

function CardPage({updateResponseList, counter}) {

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  const [buttonValue, setButtonValue] = useState(0);
  const [cardColor, setCardColor] = useState('white'); // Initial color
  const [buttonColor, setButtonColor] = useState('gray'); // Initial button color

  const updateButton = (e) => {
    setButtonValue(e);
  };

  const [active, setActive] = useState(true)

  const handleClick = (answer) => {
    updateResponseList(counter, answer)
    setActive(!active)
    console.log(active)
  }

    return (
      <View>
        <Card >
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                <Text variant="titleLarge">{counter}</Text>
                <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                <Button  title="First" style={{borderColor: active ? 'lightgreen' : 'black', }} onPress={() => handleClick(1)}></Button>
                <Button title="Second" style={{ borderColor: active ? 'lightgreen' : 'black', }} onPress={() => handleClick(2)}></Button>
                <Button title="Third"  style={{ borderColor: active ? 'lightgreen' : 'black', }} onPress={() => handleClick(3)}></Button>
                </Card.Actions>
            </Card>
      </View>
    )
  }

  export default CardPage
