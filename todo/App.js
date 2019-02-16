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

import { NavStackAppContainer } from './Nav'

//flow, structure of expected content
//<> means allows for type-setting later
// Array<stateItem> means array MUST contain a stateItem

type Props = {};
type Super = { items: Array<stateItem> };
// type stateItem = { 
//   txt:String, 
//   status: Boolean
// }

//flow -> <Props> uses the type above
//in constructor i want access to props && super
/*
  renderItem EXPECTS the destructured parameter to be 'item'
*/
export default class App extends Component<Props, Super> {
  
  constructor(props){
    super(props)
  
    //was items
    this.state = {
      dummy: true
    }
  
    // this.updateThisItem = this.updateThisItem.bind(this)
  
  }


  render() {
    return (
      
      <View style={styles.container}>
      
        <View>
          <Text>TO DO LIST</Text>
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
  }
});
