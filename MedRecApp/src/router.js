import React from 'react';
import {StyleSheet} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import dashboard from './components/dashboard/dashboard';
import LoginForm from './components/login/login';
import myhealth from './components/myhealth/myhealth';

const router = () => {
return (
    <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle}>
        <Scene key='root' hideNavBar>
            <Scene key='auth' hideNavBar>
                <Scene key='login' component={LoginForm} title='LOGIN' initial />
            </Scene>
            <Scene key='main'>
                <Scene key='dashboard' component={dashboard} title='HOME' />
                <Scene 
                    rightTitle='Add'
                    onRight={ () => { console.log('right tapped!!!') } }
                    key='myhealth' 
                    component={myhealth} 
                    title='MY HEALTH' />
            </Scene>
        </Scene>
    </Router>
);
};

const styles = StyleSheet.create({
    navBar: {
        backgroundColor:'#1E824C',
    },
    navBarTitle:{
        color:'#FFFFFF',
        fontSize: 26
    },
    barButtonTextStyle:{
        color:'#FFFFFF'
    },
    barButtonIconStyle:{
        tintColor:'rgb(255,255,255)'
    }
});

export default router;