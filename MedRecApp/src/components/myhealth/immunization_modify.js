import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Picker, View, ScrollView, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import AddButton from '../common/add_button';

export default class immunization_modify extends Component<{}> {
  constructor(){
    super();
    this.state = { 
      immunization: null, 
      immunization_status: ["Unknow", "Active", "Completed", "Discontinued", "On Hold", "Declined"],
    };
    
  }

  _handleStatus = (itemValue) => {
    var m = this.state.immunization;
    m.status = itemValue;
    this.setState({ immunization: m });
  };

  _handleFormSave = () => { alert(this.props.immunization); };
  
  componentWillMount(){
    //this.setState({ condition_types: ["Health Condition", "Surgical History", "Family Health Condition", "Personal Health Condition"] });
    this.setState({ immunization: this.props.immunization });
  }

  _loadStatusItems(){
      return(this.state.immunization_status.map((immunization_status, i) =>
        <Picker.Item key={i} label = {immunization_status} value = {immunization_status} />
      )
    )
  }

  _renderStatus(){
    if(1==1){
      return(
        <View>
          <Text style={styles.textLable}>Status:</Text>
          <Picker style={{width: '100%'}} selectedValue = {this.state.immunization.status} 
                  onValueChange={(itemValue, itemIndex) => this._handleStatus(itemValue)}>
              { this._loadStatusItems() }
          </Picker>
        </View>
      );
    }else{
      return null;
    }
  }

  _renderProviderName(){
    if(1==1){
      return(
        <View >
          <Text style={styles.textLable}>Provider First Name:</Text>
          <TextInput value = {this.state.immunization.provider_fname} />
          <Text style={styles.textLable}>Provider Last Name:</Text>
          <TextInput value = {this.state.immunization.provider_fname} />
        </View>
      );
    }else{
      return null;
    }    
  }

  _renderName(){
    if(1==1){
      return(
        <View >
          <Text style={styles.textLable}>Name:</Text>
          <TextInput value={this.state.immunization.name}/>
        </View>
      );
    }else{
      return null;
    }    
  }

  _renderDirections(){
    if(1==1){
      return(
        <View >
          <Text style={styles.textLable}>Directions:</Text>
          <TextInput value={this.state.immunization.directions}/>
        </View>
      );
    }else{
      return null;
    }    
  }

  _renderComments(){
    if(1==1){
      return(
        <View >
          <Text style={styles.textLable}>Comments:</Text>
          <TextInput multiline = {true} numberOfLines = {4} value = {this.state.immunization.comments} />
        </View>
      );
    }else{
      return null;
    }    
  }

  _renderSaveButton(){
    if(1==1){
      return(
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonProps} onPress={() => this._handleFormSave()}>
              <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View> 
      );
    }else{
      return null;
    }    
  }

  render() {
    return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          { this._renderName() }
          { this._renderDirections() }
          { this._renderProviderName() }
          { this._renderStatus() }
          { this._renderComments() }
        </View>
        { this._renderSaveButton() }
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
  },
  card: {
    margin: 2,
    width: '94%',
    borderWidth: 0,
    borderColor: 'lightgrey',
    borderRadius: 4,   
    shadowOpacity: 4,
    elevation: 0,
    backgroundColor : "#0000"
  },
  textLable: { fontSize:18, color: 'black', fontWeight: 'bold' },
  rowStyleContainer: {
    padding: 0, 
    flex: 1,
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'flex-start',
    marginTop: 20
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  buttonDatePickerProps: {
    width: 150,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#3498DB',
    marginBottom: 0,
    marginTop: 10,
    marginRight: 10,  
    padding: 10,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  buttonProps: {
    width: 300,
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
});
