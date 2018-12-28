import React, { Component } from 'react';
import { Text, View } from 'react-native';

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
const blinkingTextArr = ['first binking text', 'second text', 'third']

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

const greetings = nameArr.map(n => {
  return <Greeting key={n} name={n} />
})

const blinkers = blinkingTextArr.map((t, ind) => {
  return <Blink key={ind} text={t}/>
})

export default class LotsOfGreetings extends Component {
  constructor(props){
    super(props)
    this.state = {
      isShowing: true
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', marginTop: 100}}>
        {greetings}
        {blinkers}
      </View>
    );
  }
}