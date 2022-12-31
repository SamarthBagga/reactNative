import React from "react";
import {View,StyleSheet,Text, Button} from 'react-native';
import { TextInput } from "react-native-gesture-handler";

export default function Login(){
    return(
        <View
        style={styles.body}>
            <Text style={styles.title}>Login</Text>
            <TextInput placeholder="name" style={styles.input}>

            </TextInput>
            <Button title="Login" color='#1eb900'></Button>
        
            

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
        width:500,

    }
})