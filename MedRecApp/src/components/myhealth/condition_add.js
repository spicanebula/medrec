import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, TouchableOpacity, TouchableHighlight
} from 'react-native';
import AddButton from '../common/add_button';

export default class condition_add extends Component<{}> {
  //state = { conditions: [] };

  componentWillMount(){
    //var conditions_arr = get_conditions_data();
    //this.setState({ condition: });
  }

  render() {
    return (
      <View>
      <ScrollView >
        <View style={styles.container}>
            <Text style={{fontSize:20, color: 'black'}}>Condition Add</Text>
        </View>
      </ScrollView>
      </View>
    );
  }

  somefunction(){}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
  },
  card: {
    margin: 2,
    width: '98%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 4,   
    shadowOpacity: 4,
    elevation: 2,
    backgroundColor : "#0000"
  },
});
