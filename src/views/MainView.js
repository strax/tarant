import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Camera from 'react-native-camera';

export default class MainView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera ref={cam => {
          this.camera = cam;
        }}
          style={styles.camera}
          aspect={Camera.constants.Aspect.fill}
        />
        <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
      </View>
    );
  }

  takePicture() {x
    const options = {};
    this.camera.capture({ metadata: options })
      .then((data) => console.log(data))
      .catch(err => console.error(err));
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