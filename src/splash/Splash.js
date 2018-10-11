import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import AppStyle from '../appStyles/AppStyles'


var utils = require('../utility/utils');
class Splash extends Component {

    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
    }


    navigateToNext = () => {
        setTimeout(() => {
            this.navigateToLogin()

            // this.props.navigation.navigate('LOGIN');
        }, 3000);

    }

    navigateToLogin = () => {
        if (utils.getVauleOtherThanString("isLogin")) {
            const navigateAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "HOMELIST" })],
            });

            this.props.navigation.dispatch(navigateAction);
        } else {
            const navigateAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "LOGIN" })],
            });

            this.props.navigation.dispatch(navigateAction);
        }


    }

    componentDidMount = () => {
        this.navigateToNext();
    }



    render() {
        return (
            <View style={AppStyle.container}>
                <StatusBar hidden={true}></StatusBar>
                <Image style={AppStyle.imageContainer}
                    source={require('../images/splash.png')}
                >

                </Image>
            </View>
        );
    }

}




export default Splash;