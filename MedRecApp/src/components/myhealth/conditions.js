import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, TouchableOpacity, TouchableHighlight
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AddButton from '../common/add_button';

export default class conditions extends Component<{}> {
  state = { conditions: [] };

  componentWillMount(){
    //var conditions_arr = get_conditions_data();
    this.setState({ conditions: this.get_conditions_data() });
  }

  renderConditions(){
    return( this.state.conditions.map((condition,i) => 
          <View style={styles.card} key={condition.name}>
          <TouchableOpacity onPress={() => this.showConditionDetail(i)}>
            <View style={{margin:10}}>
              <Text style={{fontSize:20, color: 'black'}}>{condition.name}</Text>
              <Text style={{fontSize:14, color: 'black'}}>{condition.status}</Text>
            </View>
            </TouchableOpacity>
          </View>
      )
    )
  }

  render() {
    return (
      <View>
      <ScrollView >
        <View style={styles.container}>
          {this.renderConditions()}
        </View>
      </ScrollView>
      <AddButton onPress={() => {Actions.condition_new()}}/>
      </View>
    );
  }

  showConditionDetail(index){ Actions.condition_detail({ condition: this.state.conditions[index] }); }
  
  get_conditions_data(){
    var _arr = [];
    _arr.push(
      {
        "type": "Health Condition",
        "name": "Disorder of lipid metabolism",
        "relationship": "Self",
        "status": "Active",
        "provider_fname": "Norton",
        "provider_lname": "Hospital",
        "procedure_dt": null,
        "resolved_dt": "02/01/2018",
        "comments": "none"
      },{
        "type": "Surgical History",
        "name": "Fracture",
        "relationship": "Self",
        "status": "Inactive",
        "provider_fname": "Norton",
        "provider_lname": "Hospital",
        "procedure_dt": "01/01/2017",        
        "resolved_dt": "12/01/2017",
        "comments": "none"
      },{
        "type": "Family Health Condition",
        "name": "High blood pressure",
        "relationship": "Father",
        "status": "Active",
        "provider_fname": "Norton",
        "provider_lname": "Hospital",
        "procedure_dt": "01/01/2017",  
        "resolved_dt": "12/01/2017",
        "comments": "none"
      },{
        "type": "Personal Health Condition",
        "name": "Headache without coffee",
        "relationship": "Self",
        "status": "Active",
        "provider_fname": "Norton",
        "provider_lname": "Hospital",
        "procedure_dt": "01/01/2017",  
        "resolved_dt": "12/01/2017",
        "comments": "I get headache all day when skip morning coffee"
      }
    );
    return _arr;
  } // function get_conditions_data()
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
    borderRadius: 6,   
    shadowOpacity: 4,
    elevation: 1,
    backgroundColor : "#0000"
  },
});
