import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity
} from 'react-native';
import { TabNavigator, TabView } from 'react-navigation';
import Conditions from './conditions';
import Medications from './medications';
import Allergies from './allergies';
import Diseases from './diseases';
import Vitals from './vitals';
import Immunizations from './immunizations';
import Documents from './documents';

var myhealth = TabNavigator({
  Conditions: { screen: Conditions },
  Medications: { screen: Medications },
  Allergies: { screen: Allergies },
  Immunizations: { screen: Immunizations },
  Diseases: { screen: Diseases },
  Vitals: { screen: Vitals },
  Documents: { screen: Documents }
},{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    scrollEnabled: true,
    activeTintColor: 'black',
    style:{
      backgroundColor:'#81b71a',
      //borderTopWidth:1,
      borderTopColor:'#D3D3D3'
      },
      indicatorStyle: {
          backgroundColor: 'orange',
      },
    tabStyle: { 
      width: 120,
      justifyContent: 'center',
      alignItems: 'center' 
    }
  }
});

myhealth.navigationOptions = {
  title: 'My Health'
};

export default myhealth;