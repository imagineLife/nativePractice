import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

const nameArr = ['Rexxar', 'Jaina', 'Valeera'];

const greetings = nameArr.map(n => {
  return <Greeting key={n} name={n} />
})

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', marginTop: 100}}>
        {greetings}
      </View>
    );
  }
}
