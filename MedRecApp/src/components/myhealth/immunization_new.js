import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Picker, View, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import {Actions} from 'react-native-router-flux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import AddButton from '../common/add_button';

export default class immunization_new extends Component<{}> {
  constructor(){
    super();
    this.state = { 
      immunization: { 
                    "name": null, "immunization_dt": null, "status": null, "provider_fname": null,
                    "provider_lname": null, "comments": null
                  }, 
      immunization_status: ["Unknow", "Received", "On Hold", "Declined"],
      isDatePickerVisible:false
    };
  }

  _showDateTimePicker = () => this.setState({ isDatePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDatePickerVisible: false });
  
  _handleDatePicked = (date) => {
    var c = this.state.immunization;
    c.immunization_dt = date.toISOString();
    this.setState({ immunization: c });
    this._hideDateTimePicker();
  };

  _handleStatus = (itemValue) => {
    var c = this.state.immunization;
    c.status = itemValue;
    this.setState({ immunizations: c });
  };

  _handleFormSave = () => {};
  
  componentWillMount(){
    //this.setState({ immunization_types: ["Health immunization", "Surgical History", "Family Health immunization", "Personal Health immunization"] });
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
          <TextInput />
          <Text style={styles.textLable}>Provider Last Name:</Text>
          <TextInput />
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
          <TextInput />
        </View>
      );
    }else{
      return null;
    }    
  }

  _renderDateTimePicker(){
    if(1==1){
      return(
        <View>
           <TouchableOpacity style={styles.buttonDatePickerProps} onPress={() => this._showDateTimePicker()}>
                  <Text style={styles.buttonText}>Immunization Date:</Text>
          </TouchableOpacity>
          <TextInput>{this.state.immunization.immunization_dt}</TextInput>
          <DateTimePicker
            isVisible={this.state.isDatePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
          />  
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
          <TextInput multiline = {true} numberOfLines = {4} />
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
          { this._renderDateTimePicker() }
          { this._renderStatus() }
          { this._renderProviderName() }
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
