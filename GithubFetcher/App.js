import React, {Component} from 'react';
import {
  View, 
  Text,
  StyleSheet,
  TextInput //a text box
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
  state = {
    searchVal: null
  }
  render() {

    console.log('this.state.searchVal')
    console.log(this.state.searchVal)
    

    let placesInList = places.filter(place => {
      return !this.state.searchVal ||
        place.name.toLowerCase().indexOf(this.state.searchVal.toLowerCase()) > -1
    }).map((pl,ind) => {
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

        <TextInput 
          style={styles.input} 
          placeholder={'Live Search'}
          onChangeText={textVal => {
            this.setState({searchVal: textVal})
          }}
          value={this.state.searchVal} />
      
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
