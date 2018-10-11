import React, { Component } from 'react'
import { View, TextInput, Text, ImageBackground } from 'react-native';
import AppStyle from '../appStyles/AppStyles';
import Strings from '../constants/Strings';
import ProgressLoader from '../utility/ProgressLoader';
import { NavigationActions, StackActions } from 'react-navigation';

require('../constants/globalVariable')
var validationHelperMethod = require('../utility/ValidationHelper')
var apiCallingMethod = require('../networkInteractor/ApiCaller')

class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        fname: '',
        lname: '',
        email: '',
        pwd: '',
        isLoading: false
    }
    dataParams = {
        first_name: this.state.fname,
        last_name: this.state.lname,
        email: this.state.email,
        password: this.state.pwd,
        device_type: 1,
        device_token: 12323434


    }

    static navigationOptions = {
        header: null,
    }

    onSignup = () => {
        if (validationHelperMethod.isEmpty(this.state.fname)) {
            alert(Strings.fName)
            return;
        } else if (validationHelperMethod.isEmpty(this.state.lname)) {
            alert(Strings.lName)
            return;
        } else if (validationHelperMethod.isEmpty(this.state.email)) {
            alert(Strings.userNameHint)
            return;
        } else if (validationHelperMethod.checkEmail(this.state.email)) {
            alert(Strings.invalidEmail)
            return;
        } else if (validationHelperMethod.isEmpty(this.state.pwd)) {
            alert(Strings.pwdHint)
            return;
        }
        this.proceedSignUp();
    }
    proceedSignUp = () => {
        this.setState({ isLoading: true })
        this.dataParams.first_name = this.state.fname;
        this.dataParams.last_name = this.state.lname;
        this.dataParams.email = this.state.email;
        this.dataParams.password = this.state.pwd;

        apiCallingMethod.getPostResponseFromApi(signupApiMethod, this.dataParams, function (result) {
            this.setState({ isLoading: false })
            console.log("result:" + JSON.stringify(result))
            //  this.state.isLoading = false;
            if (result.status) {
                this.saveSignupResponse(result);
            } else {
                alert(result.message)
            }

        }.bind(this))

    }

    navigateToHome = () => {
        const navigateAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "HOMELIST" })],
        });

        this.props.navigation.dispatch(navigateAction);
    }


    saveSignupResponse = (result) => {
        try {
            AsyncStorage.setItem('isLogin', JSON.stringify(true));
            AsyncStorage.setItem('email', result.result.email);
            AsyncStorage.setItem('fName', result.result.first_name);
            AsyncStorage.setItem('lName', result.result.last_name);
            AsyncStorage.setItem('id', JSON.stringify(result.result.user_id))
            this.navigateToHome();
        } catch (errr) {
            console.log(errr)
        }
    }

    render() {
        return (
            <View
                style={AppStyle.container}
            >

                <ImageBackground style={AppStyle.imageContainer}
                    source={require('../images/splash.png')}
                >

                    <View
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    >


                        <TextInput
                            style={AppStyle.inputText}
                            autoCapitalize='none'
                            multiline={false}
                            onChangeText={(nameStr) => this.setState({ fname: nameStr })}
                            placeholder={Strings.fName}
                            underlineColorAndroid='rgba(0,0,0,0)'
                        />

                        <TextInput
                            style={AppStyle.inputText}
                            autoCapitalize='none'
                            multiline={false}
                            onChangeText={(nameStr) => this.setState({ lname: nameStr })}
                            placeholder={Strings.lName}
                            underlineColorAndroid='rgba(0,0,0,0)'
                        />

                        <TextInput
                            style={AppStyle.inputText}
                            autoCapitalize='none'
                            multiline={false}
                            onChangeText={(emailStr) => this.setState({ email: emailStr })}
                            placeholder={Strings.userNameHint}
                            underlineColorAndroid='rgba(0,0,0,0)'
                        />


                        <TextInput
                            style={AppStyle.inputText}
                            autoCapitalize='none'
                            multiline={false}
                            onChangeText={(pwdStr) => this.setState({ pwd: pwdStr })}
                            placeholder={Strings.pwdHint}
                            underlineColorAndroid='rgba(0,0,0,0)'
                        />


                        <Text
                            style={AppStyle.btnStyle}
                            onPress={this.onSignup.bind(this)}
                        >{Strings.register}</Text>


                        <Text
                            style={{ fontSize: 15, color: "#ffffff", marginTop: 15 }}
                        >
                            {Strings.alreadyAccount}

                        </Text>

                        <Text
                            style={AppStyle.btnStyle}
                            onPress={() => this.props.navigation.navigate('LOGIN')}
                        >{Strings.loginText}</Text>


                    </View>
                    {
                        this.state.isLoading ? (
                            <ProgressLoader />
                        ) : null

                    }

                </ImageBackground>
            </View>

        );
    }
}


export default SignUp;
