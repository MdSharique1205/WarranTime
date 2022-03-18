import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () =>{
    return (
        <View>
            <ImageDetail 
            title='Desert' 
            image = {require('../../assets/Desert1.jpeg')}
            score = {Math.trunc(Math.random()*10)}/>
            <ImageDetail 
            title='Beach' 
            image = {require('../../assets/Beach1.jpeg')}
            score = {Math.trunc(Math.random()*10)}/>
            <ImageDetail 
            title='Mountain' 
            image = {require('../../assets/Mountain1.jpeg')}
            score = {Math.trunc(Math.random()*10)}/>
        </View>
    )
}

const style = StyleSheet.create({});

export default ImageScreen;