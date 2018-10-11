import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import AppStyle from '../appStyles/AppStyles';


var utils = require('../utility/utils');
class ProfileDetail extends Component {

    state = {
        fname: '',
        lname: '',
        email: ''

    }
    constructor(props) {
        super(props);
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            title: 'Profile Detail',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: '100',
                fontSize: 20,
                color: 'white',
                alignSelf: 'center',
                textAlign: 'center',

            }

        }

    }
    getName = () => {

        return utils.getItem('fName');
    }

   async componentWillMount() {

        const fname = await AsyncStorage.getItem('fName');
        const lname = await AsyncStorage.getItem('lName');
        const email = await AsyncStorage.getItem('email');
        this.setState({ fname: fname });
        this.setState({ lname: lname });
        this.setState({ email: email });
    }
    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: "column",
                backgroundColor: "#454567"
            }}>
                <View style={{
                    flexDirection: "row",
                }} >
                    <Text style={AppStyle.lableTextStyle}>First Name : </Text>
                    <Text style={AppStyle.nameTextStyle}> {this.state.fname}</Text>
                    </View>
                    <View style={{
                    flexDirection: "row",
                }} >
                    <Text style={AppStyle.lableTextStyle}>Last Name : </Text>
                    <Text style={AppStyle.nameTextStyle}> {this.state.lname}</Text>
                    </View>
                    <View style={{
                    flexDirection: "row",
                }} >
                    <Text style={AppStyle.lableTextStyle}>Email  : </Text>
                    <Text style={AppStyle.nameTextStyle}> {this.state.email}</Text>
                </View>


            </View>
        )
    }
}

export default ProfileDetail;