import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableHighlight
} from 'react-native';

export default class AddButton extends Component<{}> {

    render() {
    return (
      <View>
        <TouchableHighlight style={styles.addButton}
            underlayColor='lightgrey' onPress={this.props.onPress}>
            <Text style={{fontSize: 36, color: '#3498DB'}}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: 'white',
    borderColor: '#3498DB',
    borderWidth: 1,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right:20,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
});
