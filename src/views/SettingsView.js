import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider
} from 'react-native';
import Camera from 'react-native-camera';

export default class SettingsView extends Component {
  render() {
    let self = this;
    return (
      <View>
        <Text style={styles.settingtext}>
          Täränt amount
        </Text>
        <Slider value={Settings ? Settings.blur : 0} onValueChange={val => {
          Settings.blur = val;
        }} />
        <Text style={styles.settingtext}>
          X Direction
        </Text>
        <Slider value={Settings ? Settings.dirx : 0} onValueChange={val => {
          Settings.dirx = val;
        }} />
        <Text style={styles.settingtext}>
          Y Direction
        </Text>
        <Slider value={Settings ? Settings.diry : 0} onValueChange={val => {
          Settings.diry = val;
        }} />
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
    margin: 40,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  settingtext: {
    fontSize: 20
  }
});
