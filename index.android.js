/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Title from './app/components/Title.jsx';

class locationProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title/>
        <Text style={styles.welcome}>
          Find Me!
        </Text>
        <Text style={styles.instructions}>
          The react-native app.
        </Text>
        <MapGL width={400} height={400} latitude={37.7577} longitude={-122.4376}
          zoom={8} onChangeViewport={(viewport) => {
            const {latitude, longitude, zoom} = viewport;
            // Optionally call `setState` and use the state to update the map.
          }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('locationProject', () => locationProject);
