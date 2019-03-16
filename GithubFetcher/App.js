import React, {Component} from 'react';
import {
  View, 
  Text
} from 'react-native'

const txtStyle = {
  padding: 40,
  fontSize: 30,
  textAlign: 'center',
  fontWeight: '300',
  color: 'steelblue'
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={txtStyle}>
          Restaurant Review
        </Text>
      </View>
    );
  }
}
