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
import Camera from 'react-native-camera';

export default class Tarant extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          style={styles.camera}
          aspect={Camera.constants.Aspect.fill}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('Tarant', () => Tarant);
