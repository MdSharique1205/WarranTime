import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>Welcome!</Text>
    <Button
    onPress={()=>navigation.navigate('Components')} 
    title='Go To Components'/>
    <Button 
    title = "Go To Lists Page"
    onPress={()=> navigation.navigate('List')}/>
    <Button
    title = "Go To Images Page"
    onPress={()=> navigation.navigate('Image')}
    />
    <Button
    title = "Go To Counter Screen"
    onPress={()=> navigation.navigate('Counter')}
    />
    <Button
    title = "Go To Colour Screen"
    onPress={()=> navigation.navigate('Color')}
    />
    <Button
    title = "Go To Colour Handling Screen"
    onPress={()=> navigation.navigate('ColorInc')}
    />
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;