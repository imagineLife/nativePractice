import React, {Component} from 'react';
import {
  View, 
  Text,
  StyleSheet
} from 'react-native'

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
          style={styles.row}>
          
          <View style={styles.edges}>
            <Text>{ind + 1}</Text>
          </View>

          <View
            style={styles.stats}>
            <Text>{pl.name}</Text>
            <Text style={styles.itemSubText}>{pl.addr}</Text>
          </View>

          <View style={styles.edges}>
            <Text>Info</Text>
          </View>
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
  }
})
