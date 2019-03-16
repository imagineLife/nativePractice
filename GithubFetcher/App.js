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

    let placesInList = places.map(pl => {
      return(
        <React.Fragment>
          <Text>
            {pl.name}
          </Text>
          <Text style={txtStyle.itemSubText}>
            {pl.addr}
          </Text>
        </React.Fragment>)
    })

    return (
      <View>

        <Text style={txtStyle.title}>
          Restaurant Review
        </Text>
      
        {placesInList}     

      </View>
    );
  }
}
