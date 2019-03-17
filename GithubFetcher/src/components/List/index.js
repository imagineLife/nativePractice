import React from 'react';
import {
	View,
	Text
} from 'react-native';

export default function Header({data, searchVal, styles}){
	
	let placesInList = data.filter(d => {
      return !searchVal ||
        d.name.toLowerCase().indexOf(searchVal.toLowerCase()) > -1
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

	return placesInList
}