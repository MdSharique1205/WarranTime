import React from "react";
import {View, Button, Text, StyleSheet} from 'react-native';
import { useState } from "react";   

const CounterScreen = () =>{
    const [counter, setCounter] = useState(0);
    return(
        <View>
            
            <Text style = {{fontSize: 30,}}>Counter: {counter}</Text>
            <Button title = 'increase' onPress={()=>{  
                setCounter(counter+1);
            }}/>
            <Button title = 'decrease'onPress={()=>{
                setCounter(counter-1);
            }}/>
        </View>
    )
}
const style = StyleSheet.create({})
export default CounterScreen
