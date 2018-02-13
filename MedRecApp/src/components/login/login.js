import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from '../header';
import LoginForm from './loginForm';

export default class login extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <Header headerText= {'MedRec'}/>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>
            MedRec
          </Text>
          <Text style={styles.logoText}>
            Manages your personal health records
          </Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E824C',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 300 
  },
  formContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 80
  }, 
  logo: {
    color: '#ECECEC', 
    fontSize: 90, 
    fontWeight: 'bold',
    textAlign: 'center'
  },
  logoText: {
    color: '#ECECEC', 
    fontSize: 18, 
    textAlign: 'center',
    opacity: 0.6
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
