import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import CameraShutterButton from './CameraShutterButton';

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
        <CameraShutterButton onPress={() => cameraShotHandler(this.camera)} />
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
