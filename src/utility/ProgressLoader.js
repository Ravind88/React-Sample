import React, { Component } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';

class ProgressLoader extends Component {

    render() {
        return (
            <View
            style={styles.loading}
            >
                <ActivityIndicator  size="large" color="#0000ff" />
            </View>


        )
    }


}

export default ProgressLoader;

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
})