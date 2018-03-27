import React, { Component } from 'react';
import {
  StyleSheet, Button, Text, View, ScrollView, TouchableOpacity, TouchableHighlight
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AddButton from '../common/add_button';

export default class condition_detail extends Component<{}> {
  constructor(){
    super();
    this.state = { 
      rendering_flags: { 
        name: false, relationship: false, provider_name: false, resolved_dt: false, 
        procedure_dt: false, status: false, comments: false, save_button: false 
      }
    };
  }

  componentWillMount(){
    this._setRenderingFlags(this.props.condition.type);
  }

  _setRenderingFlags(condition_type){
    var flags = this.state.rendering_flags;
    if(condition_type == 'Select Type'){
      flags = { name: false, relationship: false, provider_name: false, resolved_dt: false, procedure_dt: false, status: false, comments: false };
    }else if(condition_type == 'Health Condition'){
      flags = { name: true, relationship: false, provider_name: false, resolved_dt: true, procedure_dt: false, status: true, comments: true };
    }else if(condition_type == 'Surgical History'){
      flags = { name: true, relationship: false, provider_name: true, resolved_dt: false, procedure_dt: true, status: true, comments: true };
    }else if(condition_type == 'Family Health Condition'){
      flags = { name: true, relationship: true, provider_name: false, resolved_dt: false, procedure_dt: false, status: true, comments: true };
    }else if(condition_type == 'Personal Health Condition'){
      flags = { name: true, relationship: false, provider_name: false, resolved_dt: false, procedure_dt: false, status: true, comments: true };
    }
    this.setState({ rendering_flags: flags });
  }

  _renderType(){
    if(1==1){
      return(
        <View>
              <Text style={styles.textLable}>Type:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.condition.type}</Text>
              <View style={styles.line}/>
        </View>
      );
    }else{
      return null;
    }
  }

  _renderName(){
    if(1==1){
      return(
        <View>
              <Text style={styles.textLable}>Name:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.condition.name}</Text>
              <View style={styles.line}/>
        </View>
      );
    }else{
      return null;
    }
  }

  _renderRelationship(){
    if(this.state.rendering_flags.relationship == true){
      return(
        <View>
              <Text style={styles.textLable}>Relationship:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.condition.relationship}</Text>
              <View style={styles.line}/>
        </View>
      );
    }else{
      return null;
    }
  }

  _renderStatus(){
    if(this.state.rendering_flags.status == true){
      return(
        <View>
              <Text style={styles.textLable}>Status:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.condition.status}</Text>
              <View style={styles.line}/>
        </View>
      );
    }else{
      return null;
    }
  }

  _renderProviderName(){
    if(this.state.rendering_flags.provider_name == true){
      return(
        <View>
              <Text style={styles.textLable}>Provider First Name:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.condition.provider_fname}</Text>
              <View style={styles.line}/>
              <Text style={styles.textLable}>Provider Last Name:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.condition.provider_lname}</Text>
              <View style={styles.line}/>              
        </View>
      );
    }else{
      return null;
    }
  }

  _renderProviderLName(){
    if(this.state.rendering_flags.provider_name == true){
      return(
        <View>
              <Text style={styles.textLable}>Provider Last Name:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.condition.provider_lname}</Text>
              <View style={styles.line}/>
        </View>
      );
    }else{
      return null;
    }
  }

  _renderProcedure_dt(){
    if(this.state.rendering_flags.procedure_dt == true){
      return(
        <View>
              <Text style={styles.textLable}>Procedure Date:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.condition.procedure_dt}</Text>
              <View style={styles.line}/>
        </View>
      );
    }else{
      return null;
    }
  }

  _renderResolved_dt(){
    if(this.state.rendering_flags.resolved_dt == true){
      return(
        <View>
              <Text style={styles.textLable}>Resolved Date:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.condition.resolved_dt}</Text>
              <View style={styles.line}/>
        </View>
      );
    }else{
      return null;
    }
  }

  _renderComments(){
    if(this.state.rendering_flags.comments == true){
      return(
        <View>
              <Text style={styles.textLable}>Comments:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.condition.comments}</Text>
        </View>
      );
    }else{
      return null;
    }
  }

  render() {
    return (
      <View>
      <ScrollView >
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={{margin:10}}>
              { this._renderType() }
              { this._renderName() }
              { this._renderRelationship() }
              { this._renderStatus() }
              { this._renderProviderName() }
              { this._renderProcedure_dt() }
              { this._renderResolved_dt() }
              { this._renderComments() }
            </View>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.deleteButtonProps} onPress={() => this._handleDelete()}>
              <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonProps} onPress={() => this._handleEdit()}>
              <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
      </View>
    );
  }

  _handleDelete(){ alert('This Condition will be deleted.'); };
  _handleEdit(){ 
    Actions.condition_modify({ condition: this.props.condition }); 
  };

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
