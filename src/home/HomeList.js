import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import AppStyle from '../appStyles/AppStyles';

class HomeList extends Component {
    constructor(props) {
        super(props);
    }
    alertMe = () => {
        alert("make custom dialogue for logout ");

    }


    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            title: 'Home',
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: '300',
                fontSize: 24,
                color: 'black',
                alignSelf: 'center',
                textAlign: 'center',

            },
            headerRight:
                (<View style={{ flexDirection: "row", }}>

                    <TouchableHighlight onPress={() => params.handleProfile()} >
                        <Text style={{ fontSize: 18, color: 'white', padding: 10 }}>Profile</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => params.handleLogout()} >
                        <Text style={{ fontSize: 18, color: 'white', padding: 10 }}>Logout</Text>
                    </TouchableHighlight>

                </View>)
        }

    }
    navigateToProfile = () => {
        this.props.navigation.navigate('PROFILEDETAIL')
    }
    componentDidMount() {
        this.props.navigation.setParams({ handleLogout: this.alertMe });
        this.props.navigation.setParams({ handleProfile: this.navigateToProfile });

    }
    render() {
        return (
            <View
                style={AppStyle.container}
            >
                <Text>Home List</Text>

            </View>

        );
    }

}


export default HomeList;