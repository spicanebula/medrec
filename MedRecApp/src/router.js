import React from 'react';
import {StyleSheet} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';

import dashboard from './components/dashboard/dashboard';
import LoginForm from './components/login/login';
import myhealth from './components/myhealth/myhealth';
import condition_detail from './components/myhealth/condition_detail';
import condition_new from './components/myhealth/condition_new';
import condition_modify from './components/myhealth/condition_modify';
import medication_detail from './components/myhealth/medication_detail';
import medication_new from './components/myhealth/medication_new';
import medication_modify from './components/myhealth/medication_modify';
//import allergy_detail from './components/myhealth/allergy_detail';
//import allergy_new from './components/myhealth/allergy_new';
//import allergy_modify from './components/myhealth/allergy_modify';
import immunization_detail from './components/myhealth/immunization_detail';
import immunization_new from './components/myhealth/immunization_new';
import immunization_modify from './components/myhealth/immunization_modify';

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
                    //rightTitle='Add'
                    //rightButtonImage={require('./components/icons/plus.png')}
                    //onRight={ () => { console.log('right tapped!!!') } }
                    key='myhealth' 
                    component={myhealth} 
                    title='MY HEALTH'
                />
                
                <Scene key='condition_detail' component={condition_detail} title='Condition Detail' titleStyle={{fontSize:24}}/>
                <Scene key='condition_new' component={condition_new} title='New Condition' titleStyle={{fontSize:24}}/>
                <Scene key='condition_modify' component={condition_modify} title='Modify Condition' titleStyle={{fontSize:24}}/>

                <Scene key='medication_detail' component={medication_detail} title='Medication Detail' titleStyle={{fontSize:24}}/>
                <Scene key='medication_new' component={medication_new} title='New Medication' titleStyle={{fontSize:24}}/>
                <Scene key='medication_modify' component={medication_modify} title='Modify Medication' titleStyle={{fontSize:24}}/>       

                <Scene key='immunization_detail' component={immunization_detail} title='Immunization Detail' titleStyle={{fontSize:24}}/>
                <Scene key='immunization_new' component={immunization_new} title='New Immunization' titleStyle={{fontSize:24}}/>
                <Scene key='immunization_modify' component={immunization_modify} title='Modify Immunization' titleStyle={{fontSize:24}}/>                 

            </Scene>

        </Scene>
    </Router>
);
};

const styles = StyleSheet.create({
    navBar: {
        backgroundColor:'#81b71a',
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