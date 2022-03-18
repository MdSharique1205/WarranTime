import React from "react";
import {View,StyleSheet, Text, Image} from 'react-native';

export default function ImageDetail ({title,image,score})
{
    return (<View>
        <Image source={image}/>
        <Text>'{title}'</Text>
        <Text>Image Score : {score}</Text>
        </View>
    )
}