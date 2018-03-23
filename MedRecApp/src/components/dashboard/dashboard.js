import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Header from '../header';

export default class dashboard extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.statsText}>
              Age: 44
          </Text>
          <Text style={styles.statsText}>
              Eye Color: Dark Brown
          </Text>
          <Text style={styles.statsText}>
              Height: 5'8"
          </Text>
          <Text style={styles.statsText}>
              Blood Group: O+
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonProps} onPress={() => this.show_myhealth()}>
              <Text style={styles.buttonText}>My Health</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonProps} onPress={() => this.someFunction()}>
              <Text style={styles.buttonText}>Physicians</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonProps}>
              <Text style={styles.buttonText}>Profiles</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  show_myhealth(){
    Actions.myhealth();
  }

  someFunction(){};
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5DADE2',
    marginTop: 40
  },
  statsText: {
    color: '#ECECEC', 
    fontSize: 18, 
    textAlign: 'center'
  }, 
  buttonContainer: {
      padding: 0, 
      flex: 1,
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'center',
      marginTop: 20
  },
  buttonProps: {
      width: 100,
      height: 100,
      borderRadius: 10,
      backgroundColor: '#3498DB',
      marginBottom: 0,
      marginTop: 10,
      marginRight: 10,  
      padding: 10,
      justifyContent: 'center', 
      alignItems: 'center'
  },
  buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700'
  },
  formContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 80
  }
});
