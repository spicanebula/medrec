import React from 'react';
import {StyleSheet} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import dashboard from './components/dashboard/dashboard';
import LoginForm from './components/login/login';
import myhealth from './components/myhealth/myhealth';
import condition_detail from './components/myhealth/condition_detail';
import condition_add from './components/myhealth/condition_add';

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
                        <Scene 
                            //rightTitle='Add'
                            //rightButtonImage={require('./components/icons/plus.png')}
                            //onRight={ () => { console.log('right tapped!!!') } }
                            key='condition_add' 
                            component={condition_add} 
                            title='Add Condition'
                            titleStyle={{fontSize:24}}
                         />
               
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