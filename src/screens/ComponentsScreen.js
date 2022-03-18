import React from "react";
import {Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30,
    },
});

const ComponentsScreen = () =>{

    const greeting = "Shalom";
    const name = 'Superman'

    return <View>
        <Text style = {{fontSize: 45}}>Getting Started with react native! </Text>
        <Text style = {{fontSize: 20}}>My name is {name}</Text>
        </View>
    
    
}

export default ComponentsScreen;