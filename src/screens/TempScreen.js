import React from "react";
import {Text, View, StyleSheet, Button} from 'react-native';
import {useState} from 'react';


const TempScreen = () =>{
    const [colort,setColor] = useState('red');
    return (
        <View>
            <Text style = {{color: colort}}>Hello World</Text>
            <Button 
            title = 'Change color'
            onPress = {()=>{
                setColor('blue')
            }}
            />
        </View>
    )
}

export default TempScreen; 