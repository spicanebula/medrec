import React, { Component } from 'react';
import {
  StyleSheet,View, TextInput, Text, TouchableOpacity, StatusBar, Alert
} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import {Actions} from 'react-native-router-flux';

export default class LoginForm extends Component<{}> {
    componentWillMount(){
        GoogleSignin.hasPlayServices({ autoResolve: true });
        GoogleSignin.configure({
            webClientId: '614167529014-5s6hrjmfckjd8rqq1mn3eb312kbmqj7f.apps.googleusercontent.com'
        });
    }

  render() {
    return (
    <View>
    <View style={styles.container}></View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonProps} onPress={() => this.handleGoogleSignIn()}>
            <Text style={styles.buttonText}>Login With Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonProps} onPress={() => this.handleGoogleSignIn()}>
            <Text style={styles.buttonText}>Login With Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonProps}>
            <Text style={styles.buttonText}>SIGNUP</Text>
        </TouchableOpacity>
    </View>
    </View>
    );
  }
    handleGoogleSignIn() {
        Actions.main({title: 'Billah, Ahmad'});
        /*
        GoogleSignin.signIn().then((user) => {
            Alert.alert(
                'Alert Title',
                JSON.stringify(user),
                [
                  {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
        }).catch((err) => {
            console.log('wrong signin',err);
        }).done(); */
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 0
    }, 
    buttonContainer: {
        padding: 0, 
        flex: 1,
        flexDirection: 'row'
    }, 
    input: {
        height: 50,
        width: 320, 
        backgroundColor: 'rgba(255,255,255,0.4)', 
        marginBottom: 15, 
        color: '#FFF',  
        fontSize: 18 
    },
    buttonProps: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#3498DB',
        marginBottom: 10,
        marginTop: 30,
        marginRight: 10,  
        padding: 10,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});
