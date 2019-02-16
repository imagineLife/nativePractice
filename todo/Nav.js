import { createAppContainer, createStackNavigator } from 'react-navigation';

import ToDoList from './helloWorld'
import HelloWorld from './helloWorld'



const NavStack = createStackNavigator(

  {
    ToDoList: { screen: ToDoList }, //friendlyRouteName ie RouteOne
    HelloWorld: { screen: HelloWorld }, //friendlyRouteName ie RouteTwo
  },
  {
    initialRouteName: 'HelloWorld',
  }

);

export const NavStackAppContainer = createAppContainer(NavStack);