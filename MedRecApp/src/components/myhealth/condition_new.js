import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Picker, View, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import AddButton from '../common/add_button';

export default class condition_new extends Component<{}> {
  state = { conditions: { type: 'health condition', name: null, status: 'unknow', resolved_dt: null, comments: null }, isDatePickerVisible:false };

  _showDateTimePicker = () => this.setState({ isDatePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDatePickerVisible: false });
  
  _handleType = (itemValue) => {
    var c = this.state.conditions;
    c.type = itemValue;
    this.setState({ conditions: c });
  };

  _handleStatus = (itemValue) => {
    var c = this.state.conditions;
    c.status = itemValue;
    this.setState({ conditions: c });
  };

  _handleDatePicked = (date) => {
    var c = this.state.conditions;
    c.resolved_dt = date.toISOString();
    this.setState({ conditions: c });
    this._hideDateTimePicker();
  };

  _handleFormSave = ()=> {};
  
  componentWillMount(){
    //var conditions_arr = get_conditions_data();
    //this.setState({ condition: });
  }

  render() {
    return (
    <ScrollView >
      <View style={styles.container}>

        <View style={styles.card}>
          <Text style={styles.textLable}>Type:</Text>
          <Picker style={{width: '100%'}} selectedValue = {this.state.conditions.type} 
                  onValueChange={(itemValue, itemIndex) => this._handleType(itemValue)}>
              <Picker.Item label = "Health Condition" value = "health condition" />
              <Picker.Item label = "Surgical History" value = "surgical history" />
          </Picker>
          
          <Text style={styles.textLable}>Name:</Text>
          <TextInput />

          <TouchableOpacity style={styles.buttonDatePickerProps} onPress={() => this._showDateTimePicker()}>
                  <Text style={styles.buttonText}>Pick Resovled Date:</Text>
          </TouchableOpacity>
          <TextInput>{this.state.conditions.resolved_dt}</TextInput>
          <DateTimePicker
            isVisible={this.state.isDatePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
          />           
          
          <Text style={styles.textLable}>Status:</Text>
          <Picker style={{width: '100%'}} selectedValue = {this.state.conditions.status} 
                  onValueChange={(itemValue, itemIndex) => this._handleStatus(itemValue)}>
              <Picker.Item label = "Active" value = "active" />
              <Picker.Item label = "Inactive" value = "inactive" />
              <Picker.Item label = "Unknown" value = "unknow" />
          </Picker>

          <Text style={styles.textLable}>Comments:</Text>
          <TextInput multiline = {true} numberOfLines = {4} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonProps} onPress={() => this._handleFormSave()}>
              <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>        
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
    width: 135,
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
