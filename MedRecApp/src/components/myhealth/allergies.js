import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AddButton from '../common/add_button';

export default class allergies extends Component<{}> {

  state = { allergies: [] };

  componentWillMount(){
    //var conditions_arr = get_conditions_data();
    this.setState({ allergies: this.get_allergies_data() });
  }

  renderallergies(){
    return( this.state.allergies.map((allergy,i) => 
          <View style={styles.card} key={allergy.name}>
          <TouchableOpacity onPress={() => this.showAllergyDetail(i)}>
            <View style={{margin:10}}>
              <Text style={{fontSize:20, color: 'black'}}>{allergy.name}</Text>
              <Text style={{fontSize:14, color: 'black'}}>{allergy.status}</Text>
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
            {this.renderallergies()}
          </View>
        </ScrollView>
        <AddButton onPress={() => {Actions.allergy_new()}}/>
      </View>
    );
  }

showAllergyDetail(index){ 
  console.log("showAllergyDetail");
  Actions.allergy_detail({ allergy: this.state.allergies[index] }); 
}

get_allergies_data(){
  var _arr = [];
  _arr.push(
      {
        "type": "Unknown",
        "name": "Lovaza 1 GM Oral Capsule",
        "status": "Active",
        "onset_dt": "Tina",
        "reactions": [],
        "comments": ""
      },{
        "type": "Unknown",
        "name": "Lovaza 1 GM Oral Capsule",
        "status": "Active",
        "onset_dt": "Tina",
        "reactions": [],
        "comments": ""
      },{
        "type": "Unknown",
        "name": "Lovaza 1 GM Oral Capsule",
        "status": "Active",
        "onset_dt": "Tina",
        "reactions": [],
        "comments": ""
      },{
        "type": "Unknown",
        "name": "Lovaza 1 GM Oral Capsule",
        "status": "Active",
        "onset_dt": "Tina",
        "reactions": [],
        "comments": ""
      }
    );
    return _arr;
  } // function get_allergies_data()

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
