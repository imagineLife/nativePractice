import React, {Component} from 'react';
import { createAppContainer, tabNavigator } from 'react-navigation';
import { Text, View } from 'react-native';

import ToDoList from './helloWorld'

const NavStack = tabNavigator(

  {
    ToDoList: { screen: ToDoList }
  },
  {
    initialRouteName: 'ToDoList',
  }

);

export const NavStackAppContainer = createAppContainer(NavStack);