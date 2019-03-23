/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//otpional to disable yellow box in simulator
// console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => App);

