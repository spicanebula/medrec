import React, { Component } from 'react';
import {
  StyleSheet, Button, Text, View, ScrollView, TouchableOpacity, TouchableHighlight
} from 'react-native';
import AddButton from '../common/add_button';

export default class condition_detail extends Component<{}> {
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
          <View style={styles.card}>
            <View style={{margin:10}}>
              <Text style={styles.textLable}>Type:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.condition.type}</Text>
              <View style={styles.line}/>

              <Text style={styles.textLable}>Name:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.condition.name}</Text>
              <View style={styles.line}/>

              <Text style={styles.textLable}>Status:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.condition.status}</Text>
              <View style={styles.line}/>
              
              <Text style={styles.textLable}>Ressolved At:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.condition.resolved_dt}</Text>
              <View style={styles.line}/>

              <Text style={styles.textLable}>Comments:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.condition.comments}</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.deleteButtonProps} onPress={() => this.someFunction()}>
              <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonProps} onPress={() => this.someFunction()}>
              <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
      </View>
    );
  }
  someFunction(){};
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
    borderRadius: 20,   
    shadowOpacity: 4,
    elevation: 2,
    backgroundColor : "#0000"
  },
  textLable: { fontSize:18, color: 'black', fontWeight: 'bold' },
  line: { borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginBottom: 10},
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
      height: 40,
      borderRadius: 10,
      backgroundColor: '#3498DB',
      marginBottom: 0,
      marginTop: 10,
      marginRight: 10,  
      padding: 10,
      justifyContent: 'center', 
      alignItems: 'center'
  },
  deleteButtonProps: {
    width: 100,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'red',
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
});
