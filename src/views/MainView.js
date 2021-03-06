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
import SettingsButton from './SettingsButton';
const { CaptureTarget } = Camera.constants;

import Navigator from 'native-navigation';

// Oh god
global.Settings = {
  blur: 1.0,
  dirx: 1.0,
  diry: 1.0
};

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
        <SettingsButton onPress={() => this.onSettingsButtonPress()} />
      </View>
    );
  }

  onCameraShutterButtonPress() {
    this.camera.capture({ target: CaptureTarget.temp })
      .then(data => {
        Navigator.present('pictureTakenView', {
          image: data,
          width: 600,
          height: 800
        });
        ToastAndroid.show("Image taken", ToastAndroid.SHORT);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
        ToastAndroid.show(error, ToastAndroid.LONG);
      });
  }

  onSettingsButtonPress() {
    Navigator.present('settingsView');
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
