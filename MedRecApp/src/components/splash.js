import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class splash extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          MedRec
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    baseText: { 
        fontFamily: 'Verdana',
      },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E824C',

  },
  title: {
    color: '#ECECEC', 
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
