/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Navigator from 'native-navigation';

// Oh god
global.Settings = {
  blur: 1.0,
  dirx: 1.0,
  diry: 1.0
};

class Home extends Component {
  render() {
    Navigator.present('mainView');
    return null;
  }
}

Navigator.registerScreen('mainView', () => require('./src/views/MainView'));
Navigator.registerScreen('pictureTakenView', () => require('./src/views/PictureTakenView'));
Navigator.registerScreen('settingsView', () => require('./src/views/SettingsView'));

AppRegistry.registerComponent('Home', () => Home);
