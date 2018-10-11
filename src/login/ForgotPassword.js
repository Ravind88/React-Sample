import React, { Component } from 'react';
import { View, ImageBackground, Image, Text, TextInput } from 'react-native';
import AppStyle from '../appStyles/AppStyles';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        header: null,
    }

    state = {
        forgotHint: 'Please enter your mail id',
        submitBtn: 'Submit',
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

                        <Image
                            style={{ resizeMode: 'center' }}
                            source={require('../images/sb2_onboard_swagbucks_logo.png')}
                        ></Image>
                        <TextInput
                            style={AppStyle.inputText}
                            autoCapitalize='none'
                            multiline={false}
                            placeholder={this.state.forgotHint}
                            underlineColorAndroid='rgba(0,0,0,0)'
                        />
                        <Text
                            style={AppStyle.btnStyle}
                        >{this.state.submitBtn}</Text>


                    </View>


                </ImageBackground>
            </View>

        );
    }

}


export default ForgotPassword;