import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Camera from 'react-native-camera';

import cameraShotHandler from '../handlers/CameraShotHandle';

export default class MainView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera ref={cam => {
          this.camera = cam;
        }}
          style={styles.camera}
          aspect={Camera.constants.Aspect.fill}
          type={'front'}
        />
        <Text style={styles.capture} onPress={() => cameraShotHandler(this.camera)}>[CAPTURE]</Text>
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
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});