import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Camera from 'react-native-camera';

import GLView from '../engine/process';

const {Surface} = require("gl-react-native");

export default class MainView extends Component {
  render() {
    return (
      <Surface width={400} height={600}>
        <GLView image={this.props.image.path} />
      </Surface>

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
  }
});