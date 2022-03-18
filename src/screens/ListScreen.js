import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () =>{
    const list = [
        {obj: "Badam"},
        {obj: "Kaju2"},
        {obj: "Lun13"},
        {obj: "Lun2"},
        {obj: "Lun3"},
        {obj: "Lun4"},
        {obj: "Lun43"},
        {obj: "Lun42"},
        {obj: "Lun41"},

    ]
    list.forEach((x,idx) => {
      x.age = Math.trunc(Math.random()*99) + 1  
    });
    
    // FlatList jsx
    // Props - 
    // 1. data (var) - contains array of list items to be displayed
    // 2. renderItem (fun) -  function describing how each list item should be displayed
    // return <FlatList 
    // // keyExtractor={(ele)=> ele.name}
    // //horizontal - will make the list horizontal
    // showsVerticalScrollIndicator = {false} // disable veritcal scroll slider
    // data = {list} 
    // renderItem = {({item, index}) =>{
    //     // x = {item: { obj: "Badam" }, index: 0 }
    //     item.key = String(index)
    //     return <Text style = {styles.textStyle}>{item.obj}</Text>
    // }}/>
    return <FlatList
    keyExtractor={(item,index) =>index.toString()}
    data={list}
    renderItem ={({item, index})=>{
        return <Text>{item.obj} with age {item.age} </Text>
    }}
    />
}

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
})

export default ListScreen;