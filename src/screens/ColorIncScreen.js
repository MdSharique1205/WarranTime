import React, {useState} from "react";
import {Text, StyleSheet,View, Button} from 'react-native';

const ColorIncScreen = () =>{
    const [red,setRed] = useState(Math.trunc(Math.random()*256));
    const [blue,setBlue] = useState(Math.trunc(Math.random()*256));
    const [green,setGreen] = useState(Math.trunc(Math.random()*256));
    return (
        <View>
        <Text style = {{fontSize:30}}>Red</Text>
        <Button title = 'Increase Red' onPress={()=>{
            red>240?setRed(255):setRed(red+15);
        }}/>
        <Button title = 'Decrease Red' onPress={()=>{
            red<15?setRed(0):setRed(red-15);
        }}/>

<Text style = {{fontSize:30}}>Green</Text>
        <Button title = 'Increase Green' onPress={()=>{
            green>240?setGreen(255):setGreen(green+15);
        }}/>
        <Button title = 'Decrease Green' onPress={()=>{
            green<15?setGreen(0):setGreen(green-15);
        }}/>

<Text style = {{fontSize:30}}>Blue</Text>
        <Button title = 'Increase Blue' onPress={()=>{
            blue>240?setBlue(255):setBlue(blue+15);
        }}/>
        <Button title = 'Decrease Blue' onPress={()=>{
            blue<15?setBlue(0):setBlue(blue-15);
        }}/>
        <View style = {{height:100,width:100, backgroundColor:`rgb(${red},${green},${blue})`}}></View>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ColorIncScreen;