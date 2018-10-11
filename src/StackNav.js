import React from 'react'
import Splash from './splash/Splash';
import Login from './login/Login';
import { createStackNavigator } from 'react-navigation';
import ForgotPassword from './login/ForgotPassword';
import HomeList from './home/HomeList';
import SignUp from './signup/SignUp';
import ProfileDetail from './profile/ProfileDetail';

const RootStack = createStackNavigator(
    {
        SPLASH: Splash,
        LOGIN: Login,
        FORGOTPWD: ForgotPassword,
        HOMELIST: HomeList,
        SIGNUP: SignUp,
        PROFILEDETAIL:ProfileDetail

    },
    {
        initialRouteName: 'SPLASH',
    }
);




export default RootStack;