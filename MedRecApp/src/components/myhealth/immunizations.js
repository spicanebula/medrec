import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AddButton from '../common/add_button';

export default class immunizations extends Component<{}> {

  state = { immunizations: [] };

  componentWillMount(){
    //var conditions_arr = get_conditions_data();
    this.setState({ immunizations: this.get_immunizations_data() });
  }

  renderImmunizations(){
    return( this.state.immunizations.map((immunization,i) => 
          <View style={styles.card} key={immunization.name}>
          <TouchableOpacity onPress={() => this.showImmunizationDetail(i)}>
            <View style={{margin:10}}>
              <Text style={{fontSize:20, color: 'black'}}>{immunization.name}</Text>
              <Text style={{fontSize:14, color: 'black'}}>{immunization.status}</Text>
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
            {this.renderImmunizations()}
          </View>
        </ScrollView>
        <AddButton onPress={() => {Actions.immunization_new()}}/>
      </View>
    );
  }

  showImmunizationDetail(index){ 
  console.log("showImmunizationDetail");
  Actions.immunization_detail({ immunization: this.state.immunizations[index] }); 
}

get_immunizations_data(){
  var _arr = [];
  _arr.push(
      {
        "name": "Influenza, Injectable",
        "immunization_dt": "",
        "status": "Active",
        "provider_fname": "Tina",
        "provider_lname": "Yuan",
        "comments": "Take for 3 months"
      },{
        "name": "Influenza, Injectable",
        "immunization_dt": "",
        "status": "Active",
        "provider_fname": "Tina",
        "provider_lname": "Yuan",
        "comments": "Take for 3 months"
      },{
        "name": "Influenza, Injectable",
        "immunization_dt": "",
        "status": "Active",
        "provider_fname": "Tina",
        "provider_lname": "Yuan",
        "comments": "Take for 3 months"
      },{
        "name": "Influenza, Injectable",
        "immunization_dt": "",
        "status": "Active",
        "provider_fname": "Tina",
        "provider_lname": "Yuan",
        "comments": "Take for 3 months"
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
