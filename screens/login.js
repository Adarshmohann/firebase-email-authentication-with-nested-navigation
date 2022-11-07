import React, { useState } from "react";
import { View ,Text, TouchableHighlight, Alert} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import auth from '@react-native-firebase/auth'




function Login({navigation}){

    
    const [email,setemail]=useState("")
    const [password,setpassword]=useState('')

    const handleSignUp = () => {
        if(email !=""&& password!=''){
        auth().createUserWithEmailAndPassword(email,password)
        .then((res)=>{
            console.log("response",res)
            Alert.alert("User created successfully, now login")
        })
        .catch((error)=>{
            console.log('error',error)
            Alert.alert(error.message)

        })
    }else{
        Alert.alert('Both fields are mandatory')
    }
}

const login=()=>{
    auth().signInWithEmailAndPassword(email,password).then((res)=>{
        console.log('response',res)
        navigation.navigate('Mytabs')
    })
    .catch((error)=>{
        console.log('error',error)
        Alert.alert(error.message)

    })
    
}


    return(
        <View style={{height:'100%',width:'100%',backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>
            
           <TextInput style={{height:50,width:260,borderRadius:5,backgroundColor:'white'}}
           placeholder={'EMAIL ID'}
           placeholderTextColor='black'
           value={email}
           onChangeText={text=> setemail(text)}>

           </TextInput>

           <TextInput style={{height:50,width:260,borderRadius:5,marginTop:15,backgroundColor:'white'}}
           placeholder={'PASSWORD'}
           placeholderTextColor='black'
           value={password}
           onChangeText={text=> setpassword(text)}>

           </TextInput>

           <TouchableHighlight style={{height:30,width:100,backgroundColor:'green',marginTop:50,borderRadius:5}}
           onPress={login}>

            <Text style={{color:'white',fontWeight:'bold',marginLeft:27,marginTop:5}}>LOGIN</Text>

           </TouchableHighlight>

           <Text style={{fontWeight:'bold',fontSize:18,marginTop:20,color:'white'}}>If you don"t have an account,signup first</Text>

           <TouchableHighlight style={{height:30,width:100,backgroundColor:'orange',marginTop:30,borderRadius:5}}
           onPress={handleSignUp}>

            <Text style={{color:'white',fontWeight:'bold',marginLeft:23,marginTop:5}}>SIGNUP</Text>

           </TouchableHighlight>


           

           


        </View>

    )
}
export default Login