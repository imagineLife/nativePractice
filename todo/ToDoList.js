import React, {Component} from 'react';
import {
  Text, 
  View,
  FlatList,
  Switch
} from 'react-native';

export default function ToDoList = () => {

  let items = [
    {
      id: 'asdf',
      key: 'todo1',
      status: true
    },
    {
      id: 'poiu',
      key: 'todo3',
      status: false
    },
    {
      id: 'qwer',
      key: 'todo2',
      status: false
    },
    {
      id: 'zxcv',
      key: 'todo3',
      status: false
    },
  ]

  updateThisItem(bool, srcItem){
  
   //does prevState work here like react?
   // this.setState((prevState) => {

   //  //loop thru arr
   //  let newItems = prevState.items.map(itm => {
   //    if(itm.id == srcItem.id) itm.status = !srcItem.status
   //    return itm
   //  })

   //  newItems.items = prevState.items
    
   //  return {items: newItems}
   // })

  }

  return(

    <FlatList data={items} renderItem={( {item} ) => {
  
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
  )
} 