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

import MainView from './src/views/MainView';

export default class Tarant extends Component {
  render() {
    return (
      <MainView />
    );
  }
}

AppRegistry.registerComponent('Tarant', () => Tarant);
