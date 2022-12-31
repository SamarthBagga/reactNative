/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
import {Node} from 'react';
import { Alert, FlatList, Pressable, TextInput } from 'react-native';
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
import Home from './screens/Home.js';
import Login from './screens/Login.js'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack=createStackNavigator();
function App() {
  
    return(
      
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign:'center',
          headerStyle:{
            backgroundColor:"#0080ff"
          },
          headerTintColor:"#ffffff",
          headerTitleStyle:{
            fontSize:25,
            fontWeight:'bold'
          }
          }}>
            <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown:false,
            }}
            />
            <Stack.Screen name="Home"
            component={Home}/>
            
            

          </Stack.Navigator>
        
      </NavigationContainer>
   
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
