import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AddButton from '../common/add_button';

export default class medications extends Component<{}> {

  state = { medications: [] };

  componentWillMount(){
    //var conditions_arr = get_conditions_data();
    this.setState({ medications: this.get_medications_data() });
  }

  renderMedications(){
    return( this.state.medications.map((medication,i) => 
          <View style={styles.card} key={medication.name}>
          <TouchableOpacity onPress={() => this.showMedicationDetail(i)}>
            <View style={{margin:10}}>
              <Text style={{fontSize:20, color: 'black'}}>{medication.name}</Text>
              <Text style={{fontSize:14, color: 'black'}}>{medication.status}</Text>
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
            {this.renderMedications()}
          </View>
        </ScrollView>
        <AddButton onPress={() => {Actions.medication_new()}}/>
      </View>
    );
  }

showMedicationDetail(index){ 
  console.log("showMedicationDetail");
  Actions.medication_detail({ medication: this.state.medications[index] }); 
}

get_medications_data(){
  var _arr = [];
  _arr.push(
      {
        "name": "Lovaza 1 GM Oral Capsule",
        "directions": "Take 2 GM twice a day",
        "status": "Active",
        "provider_fname": "Tina",
        "provider_lname": "Yuan",
        "comments": "Take for 3 months"
      },{
        "name": "Multivitamins Oral Tablet",
        "directions": "As needed",
        "status": "Active",
        "provider_fname": "",
        "provider_lname": "",
        "comments": "none"
      },{
        "name": "Tylenol Oral Tablet",
        "directions": "As needed",
        "status": "Active",
        "provider_fname": "",
        "provider_lname": "",
        "comments": "none"
      },{
        "name": "Motrin Oral Tablet",
        "directions": "As needed",
        "status": "Active",
        "provider_fname": "",
        "provider_lname": "",
        "comments": "none"
      }
    );
    return _arr;
  } // function get_medications_data()

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
