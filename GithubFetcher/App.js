import React, {Component} from 'react';
import {
  View, 
  Text
} from 'react-native'

const txtStyle = {
  padding: 40,
  fontSize: 30,
  textAlign: 'center'
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={txtStyle}>This is like a p tag in a div</Text>
      </View>
    );
  }
}
