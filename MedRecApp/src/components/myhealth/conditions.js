import React, { Component } from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';

export default class conditions extends Component<{}> {
  state = { conditions: [] };

  componentWillMount(){
    var conditions_arr = [];
    conditions_arr.push({
      "type": "Health Condition",
      "name": "Disorder of lipid metabolism",
      "status": "Active",
      "resolved_dt": "02/01/2018",
      "comments": "none"
    });
    conditions_arr.push({
      "type": "Surgical History",
      "name": "Fracture",
      "status": "Inactive",
      "resolved_dt": "12/01/2017",
      "comments": "none"
    });
    this.setState({ conditions: conditions_arr });
  }

  renderConditions(){
    return this.state.conditions.map(condition => 
      <Text key={condition.name}>{condition.name}</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
        {this.renderConditions()}
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
