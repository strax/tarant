import React, {Component} from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class SettingsButton extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableNativeFeedback onPress={this.props.onPress} background={TouchableNativeFeedback.Ripple('#fff', true)}>
              <View style={styles.button}>
                <Icon name="settings" color="rgba(255,255,255,0.9)" size={30} />
              </View>
            </TouchableNativeFeedback>
          </View>
      </View>
    )
  }
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 250,
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
