import React, {Component} from 'react';
import {
  View, 
  Text
} from 'react-native'

const styles = {
  title: {
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '300',
    color: 'steelblue'
  },
  itemSubText: {
    color: 'grey'
  },
  flex: {
    c: {flexDirection: 'column'},
    r: {flexDirection: 'row'},
  }
}

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
  render() {

    let placesInList = places.map((pl,ind) => {
      return(
        <View 
          key={pl.name}
          style={styles.flex.r}>
          
          <Text>{ind + 1}</Text>

          <View
            style={styles.flex.c}>
            <Text>{pl.name}</Text>
            <Text style={styles.itemSubText}>{pl.addr}</Text>
          </View>

          <Text>Info</Text>
        </View>)
    })

    return (
      <View
        style={{flex:1}}>

        <Text style={styles.title}>
          Restaurant Review
        </Text>
      
        {placesInList}     

      </View>
    );
  }
}
