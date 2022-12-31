import React, { useEffect } from 'react'
import { View,Text } from 'react-native'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home(){
    const[name,setName]=useState('')
    useEffect(()=>{
        getData();
    },[]);
    const getData=()=>{
        try{
            AsyncStorage.getItem('Username')
            .then(value=>{
                if(value!=null){
                    setName(value);
                }
            })
        }catch(error){
            console.log(error)
        }
    }
    return(
        <View>
            <Text>Welcome {name}</Text>

        
            

        </View>
        
    )
}
