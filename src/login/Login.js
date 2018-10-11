import React, { Component } from 'react';
import { View, Text, Image, TextInput, ImageBackground, AsyncStorage } from 'react-native';
import String from '../constants/Strings';
import AppStyle from '../appStyles/AppStyles';
import ProgressLoader from '../utility/ProgressLoader';
import { NavigationActions, StackActions } from 'react-navigation';
require('../constants/globalVariable')
var validationHelperMethods = require('../utility/ValidationHelper')
var apiCallingMethod = require('../networkInteractor/ApiCaller')
class Login extends Component {
    static navigationOptions = {
        header: null,
    }

    state = {
        loginInput: '',
        pwd: '',
        isLoading: false
    }

    constructor(props) {
        super(props);
    }

    dataParams = {
        email: this.state.loginInput,
        password: this.state.pwd
    };


    onLogin = () => {

        if (validationHelperMethods.isEmpty(this.state.loginInput) && validationHelperMethods.isEmpty(this.state.pwd)) {
            alert(String.blankFields)
            return;
        } else if (validationHelperMethods.isEmpty(this.state.loginInput)) {
            alert(String.userNameHint);
            return;
        } else if (validationHelperMethods.isEmpty(this.state.pwd)) {
            alert(String.pwdHint);
            return;
        } else if (validationHelperMethods.checkEmail(this.state.loginInput)) {
            alert(String.invalidEmail);
            return;
        }
        this.fetchDataFromApi(this.state.loginInput, this.state.pwd);

    }

    fetchDataFromApi = (email, pwd) => {
        this.setState({ isLoading: true })
        this.dataParams.email = email;
        this.dataParams.password = pwd;
        apiCallingMethod.getPostResponseFromApi(loginApiMethod, this.dataParams, function (result) {
            console.log("result:" + JSON.stringify(result))
            console.log("rest ====================" + result.result.email)
            this.setState({ isLoading: false })
            if (result.status) {
                this.saveLoginResponse(result);
            } else {
                alert(result.message)
            }

        }.bind(this))

    }


    saveLoginResponse = async (result) => {
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
    navigateToHome = () => {
        const navigateAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "HOMELIST" })],
          });
        
          this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View style={AppStyle.container}

            >
                <ImageBackground style={AppStyle.imageContainer}
                    source={require('../images/splash.png')}
                >

                    <View
                        style={AppStyle.inputContainer}
                    >
                        <Image
                            style={{ resizeMode: 'center' }}
                            source={require('../images/sb2_onboard_swagbucks_logo.png')}
                        ></Image>
                        <TextInput
                            style={AppStyle.inputText}
                            autoCapitalize='none'
                            multiline={false}
                            onChangeText={(email) => { this.setState({ loginInput: email }) }}
                            placeholder={String.userNameHint}
                            underlineColorAndroid='rgba(0,0,0,0)'
                        />

                        <TextInput
                            style={AppStyle.inputText}
                            autoCapitalize='none'
                            multiline={false}
                            placeholder={String.pwdHint}
                            onChangeText={(password) => { this.setState({ pwd: password }) }}
                            onChangeText={(pd) => { this.setState({ pwd: pd }) }}
                            underlineColorAndroid='rgba(0,0,0,0)'
                        />
                        <Text
                            style={AppStyle.btnStyle}
                            onPress={this.onLogin.bind(this)}
                        >{String.loginText}</Text>

                        <Text
                            style={{ margin: 10, fontSize: 18, color: "#3eabde", textAlign: "left", width: "90%" }}
                            onPress={() => this.props.navigation.navigate('FORGOTPWD')}

                        >
                            {String.forgotPwd}
                        </Text>


                        <Text
                            style={{ fontSize: 15, color: "#ffffff", marginTop: 15 }}
                        >
                            {String.donHaveAccount}

                        </Text>

                        <Text
                            style={AppStyle.btnStyle}
                            onPress={() => this.props.navigation.navigate('SIGNUP')}
                        >{String.signup}</Text>



                    </View>

                    {
                        this.state.isLoading ? (
                            <ProgressLoader />
                        ) : null

                    }

                </ImageBackground>

            </View >


        );
    }
}




export default Login;


