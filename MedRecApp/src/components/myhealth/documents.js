import React, { Component } from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';

export default class documents extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
                <Text style={styles.statsText}>
                    Documents
                </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#5DADE2',
    marginTop: 40
  },
  statsText: {
    //color: '#ECECEC', 
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
      backgroundColor: 'steelblue',
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
