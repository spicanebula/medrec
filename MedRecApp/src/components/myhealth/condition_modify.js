import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Picker, View, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import {Actions} from 'react-native-router-flux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import AddButton from '../common/add_button';

export default class condition_modify extends Component<{}> {
  constructor(){
    super();
    this.state = { 
      condition: null, 
      condition_types: ["Select Type", "Health Condition", "Surgical History", "Family Health Condition", "Personal Health Condition"],
      relations: ["Select Relationship", "Self", "Father", "Mother", "Son", "Daughter", "Wife"],
      condition_status: ["Unknow", "Active", "Inactive", "Resolved", "Denied"],
      isDatePickerVisible:false,
      rendering_flags: { name: false, relationship: false, provider_name: false, resolved_dt: false, procedure_dt: false, status: false, comments: false, save_button: false }
    };
    
  }

  _setRenderingFlags(condition_type){
    var flags = this.state.rendering_flags;
    if(condition_type == 'Select Type'){
      flags = { name: false, relationship: false, provider_name: false, resolved_dt: false, procedure_dt: false, status: false, comments: false, save_button: false };
    }else if(condition_type == 'Health Condition'){
      flags = { name: true, relationship: false, provider_name: false, resolved_dt: true, procedure_dt: false, status: true, comments: true, save_button: true };
    }else if(condition_type == 'Surgical History'){
      flags = { name: true, relationship: false, provider_name: true, resolved_dt: false, procedure_dt: true, status: true, comments: true, save_button: true };
    }else if(condition_type == 'Family Health Condition'){
      flags = { name: true, relationship: true, provider_name: false, resolved_dt: false, procedure_dt: false, status: true, comments: true, save_button: true };
    }else if(condition_type == 'Personal Health Condition'){
      flags = { name: true, relationship: false, provider_name: false, resolved_dt: false, procedure_dt: false, status: true, comments: true, save_button: true };
    }
    this.setState({ rendering_flags: flags });
  }

  _showDateTimePicker = () => this.setState({ isDatePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDatePickerVisible: false });
  
  _handleType = (itemValue) => {
    this._setRenderingFlags(itemValue);
    
    var c = this.state.condition;
    c.type = itemValue;
    this.setState({ condition: c });
    
    Actions.refresh();
  };

  _handleRelationship = (itemValue) => {
    var c = this.state.condition;
    c.relationship = itemValue;
    this.setState({ condition: c });
    
    Actions.refresh();
  };

  _handleStatus = (itemValue) => {
    var c = this.state.condition;
    c.status = itemValue;
    this.setState({ conditions: c });
  };

  _handleDatePicked = (date) => {
    var c = this.state.condition;
    c.resolved_dt = date.toISOString();
    this.setState({ condition: c });
    this._hideDateTimePicker();
  };

  _handleFormSave = () => { alert(this.props.condition); };
  
  componentWillMount(){
    //this.setState({ condition_types: ["Health Condition", "Surgical History", "Family Health Condition", "Personal Health Condition"] });
    this.setState({ condition: this.props.condition });
    this._setRenderingFlags(this.props.condition.type);
  }

  _loadRelationshipItems(){
      return(this.state.relations.map((relation, i) =>
        <Picker.Item key={i} label = {relation} value = {relation} />
      )
    )
  }

  _renderRelationships(){
    if(this.state.rendering_flags.relationship == true){
      return(
        <View>
          <Text style={styles.textLable}>Relationship:</Text>
          <Picker style={{width: '100%'}} selectedValue = {this.state.condition.relationship} 
                  onValueChange={(itemValue, itemIndex) => this._handleRelationship(itemValue)}>
            { this._loadRelationshipItems() }
          </Picker>
        </View>
      );
    }else{
      return null;
    }
  }

  _loadTypeItems(){
      return(this.state.condition_types.map((condition_type, i) =>
        <Picker.Item key={i} label = {condition_type} value = {condition_type} />
      )
    )
  }

  _renderType(){
    if(1==1){
      return(
        <View>
          <Text style={styles.textLable}>Type:</Text>
          <Picker style={{width: '100%'}} selectedValue = {this.state.condition.type} 
                  onValueChange={(itemValue, itemIndex) => this._handleType(itemValue)}>
            { this._loadTypeItems() }
          </Picker>
        </View>
      );
    }else{
      return null;
    }
  }

  _loadStatusItems(){
      return(this.state.condition_status.map((condition_status, i) =>
        <Picker.Item key={i} label = {condition_status} value = {condition_status} />
      )
    )
  }

  _renderStatus(){
    if(this.state.rendering_flags.status == true){
      return(
        <View>
          <Text style={styles.textLable}>Status:</Text>
          <Picker style={{width: '100%'}} selectedValue = {this.state.condition.status} 
                  onValueChange={(itemValue, itemIndex) => this._handleStatus(itemValue)}>
              { this._loadStatusItems() }
          </Picker>
        </View>
      );
    }else{
      return null;
    }
  }

  _renderDateTimePicker(){
    if(this.state.rendering_flags.resolved_dt == true || this.state.rendering_flags.procedure_dt == true){
      return(
        <View>
           <TouchableOpacity style={styles.buttonDatePickerProps} onPress={() => this._showDateTimePicker()}>
                  <Text style={styles.buttonText}>Pick Resovled Date:</Text>
          </TouchableOpacity>
          <TextInput>{this.state.condition.resolved_dt}</TextInput>
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

  _renderProviderName(){
    if(this.state.rendering_flags.provider_name == true){
      return(
        <View >
          <Text style={styles.textLable}>Provider First Name:</Text>
          <TextInput value = {this.state.condition.provider_fname} />
          <Text style={styles.textLable}>Provider Last Name:</Text>
          <TextInput value = {this.state.condition.provider_fname} />
        </View>
      );
    }else{
      return null;
    }    
  }

  _renderName(){
    if(this.state.rendering_flags.name == true){
      return(
        <View >
          <Text style={styles.textLable}>Name:</Text>
          <TextInput value={this.state.condition.name}/>
        </View>
      );
    }else{
      return null;
    }    
  }

  _renderComments(){
    if(this.state.rendering_flags.comments == true){
      return(
        <View >
          <Text style={styles.textLable}>Comments:</Text>
          <TextInput multiline = {true} numberOfLines = {4} value = {this.state.condition.comments} />
        </View>
      );
    }else{
      return null;
    }    
  }

  _renderSaveButton(){
    if(this.state.rendering_flags.save_button == true){
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
          { this._renderType() }
          { this._renderName() }
          { this._renderProviderName() }
          { this._renderDateTimePicker() } 
          { this._renderRelationships() }
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
