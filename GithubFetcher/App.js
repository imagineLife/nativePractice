import React, {Component} from 'react';
import {
  View, 
  Text
} from 'react-native'

const txtStyle = {
  title: {
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '300',
    color: 'steelblue'
  },
  itemSubText: {
    color: 'grey'
  }
}

export default class App extends Component {
  render() {
    return (
      <View>

        <Text style={txtStyle.title}>
          Restaurant Review
        </Text>
      
        <Text>
          Example Restaurant
        </Text>
        <Text style={txtStyle.itemSubText}>
          123 Main Street
        </Text>

      </View>
    );
  }
}
