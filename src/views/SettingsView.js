import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class CameraShutterButton extends Component {
  render() {
    return (
      <ScrollView>
        <Text />
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  buttonContainer: {
    borderRadius: 100,
    marginBottom: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  button: {
    padding: 10,
  }
}
