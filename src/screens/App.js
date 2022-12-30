/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import {Node} from 'react';
import { FlatList, Pressable, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import { Image } from 'react-native';
// import {Node} from 'react';
import {
 
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
function App() {
    return(
      
      <View style={styles.body}>
        <Text style={styles.title}>Login/Signup</Text>
        <TextInput style={styles.input} placeholder="Enter your name">
        </TextInput>
        <Button color='#1eb900' title='login'/>


      </View>
   
    )
  }

  const styles=StyleSheet.create({
    body:{ 
      flex:1,
      // justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#0080ff",
    },
    text:{
      fontSize:40,
      fontWeight:'bold',
      margin:10,
    },
    title:{
      fontSize:40,
    },
    input:{
      width:300,
      borderWidth:1,
      borderColor:'555',
      marginTop:130,
      marginBottom:10,
      fontSize:20,
    }

  })
   



export default App;
