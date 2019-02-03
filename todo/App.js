/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  FlatList,
  Switch
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//flow, structure of expected content
//<> means allows for type-setting later
// Array<stateItem> means array MUST contain a stateItem

type Props = {};
type Super = { items: Array<stateItem> };
type stateItem = { 
  txt:String, 
  status: Boolean
}

//flow -> <Props> uses the type above
//in constructor i want access to props && super
/*
  renderItem EXPECTS the destructured parameter to be 'item'
*/
export default class App extends Component<Props, Super> {
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          key: 'todo1',
          status: 1
        },
        {
          key: 'todo2',
          status: 0
        },
      ]
    }
    this.updateThisItem = this.updateThisItem.bind(this)
  }

  updateThisItem(srcItem){

   //does prevState work here like react?
   this.setState((prevState) => {
    let thisStateItem = prevState.items.find(itm => item.key === srcItem)
    console.log('thisStateItem')
    console.log(thisStateItem)
    
    return {
      items: prevState.items.filter(it => {
        return it.key !== srcItem
      }).concat([{
        key: srcItem,
        status: 0
      }])
    }
   })

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <View>
          <Text>MicCheck</Text>
          <FlatList data={this.state.items} renderItem={( {item} ) => {
            return (
              <React.Fragment>
                <Switch
                  onValueChange={this.updateThisItem}
                  value={item.status}/>
                <Text>
                  {item.key}
                </Text>
              </React.Fragment>
            )
          }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
