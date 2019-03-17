import React, {Component} from 'react';
import {
  View, 
  Text,
  StyleSheet,
  TextInput, //a text box
  Platform // device-specific
} from 'react-native'

import Header from './src/components/Header';
import List from './src/components/List';

const places = [
  {
    name: 'Example Restaurant 1',
    addr: '123 Main st'
  },
  {
    name: 'Example Restaurant 2',
    addr: '123 South st'
  },
  {
    name: 'Example Restaurant 3',
    addr: '123 North st'
  }
]

export default class App extends Component {
  state = {
    searchVal: null
  }
  render() {

    return (
      <View
        style={{flex:1}}>

        <Header style={styles.title} />

        <TextInput 
          style={styles.input} 
          placeholder={'Live Search'}
          onChangeText={textVal => {
            this.setState({searchVal: textVal})
          }}
          value={this.state.searchVal} />

        <List 
          data={places}
          searchVal={this.state.searchVal}
          styles={styles}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '300',
    color: 'steelblue'
  },
  row: { flexDirection: 'row'},
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  stats: {
    flexDirection: 'column',
    flex: 8
  },
  input: {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5'
  }
})
