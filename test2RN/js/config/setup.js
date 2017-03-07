/**
 * Created by lishunfeng on 2017/3/6.
 */

import React, { Component } from 'react';
import {Navigator} from 'react-native';
import MainPage from '../page/MainPage'
import SplashScreen from '../SplashScreen';

export  default class Navigation extends Component {

    render(){
        return (
            <Navigator
                initialRoute={{component:MainPage}}
                renderScene={(route,navigator)=>{
                    return <route.component navigator=
                    {navigator}{...route.args}/>
                }}
                />
        );
    }
    componentDidMount(){
        SplashScreen.hide();
    }
}


