import React, {useState} from "react";
import {Text, View, Button, StyleSheet} from 'react-native';
import { FlatList } from "react-native-gesture-handler";

const ColorScreeen = () =>{
    const [colors,setColors] = useState([]);
    return(
        <View>
            <Button title = "Add Color"
            onPress={()=>{
                setColors([...colors,RandomRgb()]);
            }}/>
            <FlatList
            keyExtractor={(item,index)=>index}
            data = {colors}
            renderItem={({item})=>{
                return <View style = {{height:100,width: 100,backgroundColor:item}}></View>
            }
        }
            />
            <View style ={{height: 100,width: 100, backgroundColor: RandomRgb()}}></View>
        </View>
    )
}

const RandomRgb = () => {
    const red = Math.trunc(Math.random()*256);
    const green = Math.trunc(Math.random()*256);
    const blue = Math.trunc(Math.random()*256);
    return `rgb(${red},${green}, ${blue})`
}
const style = StyleSheet.create({})

export default ColorScreeen;
