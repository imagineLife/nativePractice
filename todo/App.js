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
          id: 'asdf',
          key: 'todo1',
          status: true
        },
        {
          id: 'qwer',
          key: 'todo2',
          status: false
        },
      ]
    }
    this.updateThisItem = this.updateThisItem.bind(this)
  }



  updateThisItem(bool, srcItem){
  
   //does prevState work here like react?
   this.setState((prevState) => {

    //loop thru arr
    let newItems = prevState.items.map(itm => {
      if(itm.id == srcItem.id) itm.status = !srcItem.status
      return itm
    })

    newItems.items = prevState.items
    
    return {items: newItems}
   })

  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <View>
          <Text>TO DO LIST</Text>
          <FlatList data={this.state.items} renderItem={( {item} ) => {
            return (
              <React.Fragment>
                <Switch
                  onValueChange={(bool) => this.updateThisItem(bool, item)}
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
