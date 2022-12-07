import React, { Component } from 'react';
import { Text, View, Linking } from 'react-native';

export default class Emergencia extends Component {
    _pressCall=()=>{
        const url='tel://192'
        Linking.openURL(url)
      }
    
      componentDidMount(){
        this._pressCall()
      }
      
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Emergencia</Text>
            </View>
        )
    }
}