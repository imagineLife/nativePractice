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
  },
  {
    name: 'Example Restaurant 21',
    addr: '123 Main st'
  },
  {
    name: 'Example Restaurant 22',
    addr: '123 South st'
  },
  {
    name: 'Example Restaurant 23',
    addr: '123 North st'
  },
  {
    name: 'Example Restaurant 31',
    addr: '123 Main st'
  },
  {
    name: 'Example Restaurant 32',
    addr: '123 South st'
  },
  {
    name: 'Example Restaurant 33',
    addr: '123 North st'
  },
  {
    name: 'Example Restaurant 41',
    addr: '123 Main st'
  },
  {
    name: 'Example Restaurant 42',
    addr: '123 South st'
  },
  {
    name: 'Example Restaurant 43',
    addr: '123 North st'
  },
  {
    name: 'Example Restaurant 51',
    addr: '123 Main st'
  },
  {
    name: 'Example Restaurant 52',
    addr: '123 South st'
  },
  {
    name: 'Example Restaurant 53',
    addr: '123 North st'
  },
  {
    name: 'Example Restaurant 61',
    addr: '123 Main st'
  },
  {
    name: 'Example Restaurant 62',
    addr: '123 South st'
  },
  {
    name: 'Example Restaurant 63',
    addr: '123 North st'
  },
  {
    name: 'Example Restaurant 71',
    addr: '123 Main st'
  },
  {
    name: 'Example Restaurant 72',
    addr: '123 South st'
  },
  {
    name: 'Example Restaurant 73',
    addr: '123 North st'
  },
  {
    name: 'Example Restaurant 81',
    addr: '123 Main st'
  },
  {
    name: 'Example Restaurant 82',
    addr: '123 South st'
  },
  {
    name: 'Example Restaurant 83',
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
