import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';
import Camera from 'react-native-camera';
import CameraShutterButton from './CameraShutterButton';

import Navigator from 'native-navigation';

export default class MainView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera ref={ref => {
          this.camera = ref;
        }}
          style={styles.camera}
          aspect={Camera.constants.Aspect.fill}
          type={'front'}
        />
        <CameraShutterButton onPress={() => this.onCameraShutterButtonPress()} />
      </View>
    );
  }

  onCameraShutterButtonPress() {
    this.camera.capture()
      .then(data => {
        Navigator.present('pictureTakenView');
        ToastAndroid.show("Image taken", ToastAndroid.SHORT);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
        ToastAndroid.show(error, ToastAndroid.LONG);
      });
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#444',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});
