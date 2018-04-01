import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AddButton from '../common/add_button';

export default class medication_detail extends Component<{}> {

  componentWillMount(){
    console.log("within medication detail...");
  }

  _renderName(){
    if(1==1){
      return(
        <View>
              <Text style={styles.textLable}>Name:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.medication.name}</Text>
              <View style={styles.line}/>
        </View>
      );
    }else{
      return null;
    }
  }

  _renderDirections(){
    if(1==1){
      return(
        <View>
              <Text style={styles.textLable}>Directions:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.medication.directions}</Text>
              <View style={styles.line}/>
        </View>
      );
    }else{
      return null;
    }
  }

  _renderStatus(){
    if(1==1){
      return(
        <View>
              <Text style={styles.textLable}>Status:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.medication.status}</Text>
              <View style={styles.line}/>
        </View>
      );
    }else{
      return null;
    }
  }

  _renderProviderName(){
    if(1==1){
      return(
        <View>
              <Text style={styles.textLable}>Provider First Name:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.medication.provider_fname}</Text>
              <View style={styles.line}/>
              <Text style={styles.textLable}>Provider Last Name:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.medication.provider_lname}</Text>
              <View style={styles.line}/>              
        </View>
      );
    }else{
      return null;
    }
  }

  _renderComments(){
    if(1==1){
      return(
        <View>
              <Text style={styles.textLable}>Comments:</Text>
              <Text style={{fontSize:18, color: 'black'}}>{this.props.medication.comments}</Text>
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
            {console.log("aaaaaaa") }
              { this._renderName() }
              { this._renderDirections() }
              { this._renderStatus() }
              { this._renderProviderName() }
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

  _handleDelete(){ alert('This Medication will be deleted.'); };
  _handleEdit(){ 
    Actions.medication_modify({ medication: this.props.medication }); 
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
