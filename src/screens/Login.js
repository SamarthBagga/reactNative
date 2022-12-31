import React, { useState,useEffect } from "react";
import {View,StyleSheet,Text, Button, Alert} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login({navigation}){
    const[name,setName]=useState('')
    useEffect(()=>{
        getData();
    },[]);
    const getData=()=>{
        try{
            AsyncStorage.getItem('Username')
            .then(value=>{
                if(value!=null){
                    navigation.navigate('Home');
                }
            })
        }catch(error){
            console.log(error)
        }
    }
    const setData= async()=>{
        if(name.length==0){
            Alert.alert('warning','wrtie name ')
        }else{
            try{
                await AsyncStorage.setItem('Username',name);
                navigation.navigate('Home');

            }catch(error){
                console.log(error);

            }

        }
    }
    return(
        <View
        style={styles.body}>
            <Text style={styles.title}>Login</Text>
            <TextInput placeholder="name" style={styles.input} onChangeText={(value)=>setName(value)}>

            </TextInput>
            <Button title="Login" color='#1eb900' onPress={setData}></Button>
        
            

        </View>
        
    )
}

const styles=StyleSheet.create({
    body:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#0080ff',
    },
    title:{
        fontSize:40,
    },
    input:{
        backgroundColor:'#555',
        borderWidth:3,
        borderColor:'black',
        textAlign:"center",
        marginTop:130,
        marginBottom:10,
        width:300,

    }
})