import React, {Component} from 'react';
import {
  View, 
  Text,
  StyleSheet,
  TextInput //a text box
} from 'react-native'

const places = [
  {name: 'React Cafe', address: '123 Anywhere St'},
  {name: 'Fancy Restaurant', address: '799 Main St'},
  {name: 'Taco Place', address: '550 Maple Rd'},
  {name: "Tony's Diner", address: '4101 College St'},
  {name: 'Pasta Central', address: '706 Harper St'},
  {name: 'Burger Builder', address: '4869 Hamilton Dr'},
  {name: 'Pizza Express', address: '1049 Bird St'},
  {name: 'Teriyaki To Go', address: '1885 Tea Berry Lane'},
  {name: 'Maroon Deli', address: '1082 Stuart St'},
  {name: 'Prime Bar and Grill', address: '1848 Fairfax Dr'},
  {name: 'Dumpling House', address: '747 Kelly Dr'},
  {name: 'Hot Chicken', address: '1816 Olive St'},
  {name: "Luna's Tap Room", address: '3256 Spirit Dr'},
  {name: 'Quick Sandwich Shop', address: '2587 Cherry Ridge Dr'},
  {name: "Bobby's Burgers", address: '4152 Berkley St'},
  {name: 'Turnpike Diner', address: '4571 Central Ave'},
  {name: 'Bombay Express', address: '65 Queens Lane'},
  {name: 'Coffee Central', address: '3228 Oakwood Circle'},
  {name: "King's Garden", address: '2935 Victoria Ct'},
  {name: 'Salads and More', address: '2454 Preston St'},
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