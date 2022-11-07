import React from "react";
import { View ,Text, ImageBackgroundComponent} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import  Icon  from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import login from './screens/login'


import Home from './Tabs/Home'
import Profile from './Tabs/Profile'
import Resource from "./Tabs/Resource";


import Coins from "./Drawer/Coins";
import Grade from "./Drawer/Grade";
import Activities from "./Drawer/Activities";

import Games from "./Bottomtabs/Games";
import Musics from "./Bottomtabs/Musics";
import Photos from "./Bottomtabs/Photos";


const stack= createStackNavigator()
const Tab= createMaterialTopTabNavigator()
const Drawer= createDrawerNavigator()
const Bottomtab=createBottomTabNavigator()



function Mystack(){
  return(
    <stack.Navigator>

      <stack.Screen
      name="login"
      component={login}
      options={{headerShown: false}}
        />

      <stack.Screen
      name="Mytabs"
      component={Mytabs}
      options={{headerShown: false}}/>

      <stack.Screen
       name="Mydrawer"
       component={Mydrawer}
       options={{headerShown: false}}/>

       <stack.Screen
       name="Mybottomtabs"
       component={Mybottomtabs}/>


    </stack.Navigator>
  )
}

function Mytabs(){

  const navigation=useNavigation('')


  return(

    <View style={{height:'100%',width:'100%'}}>

      <View style={{height:'5%',width:'100%',backgroundColor:'white'}}>
        <View style={{marginLeft:10,marginTop:10}}>
        <Icon name="menu" size={26} color='black'
        onPress={()=>{navigation.navigate('Mydrawer')}}></Icon> 
        </View>

      </View>

    <Tab.Navigator>

      

        
      <Tab.Screen
      name="Home"
      component={Mybottomtabs}
      options={{
        headerShown: false,
        tabBarActiveTintColor:'black',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:({focused})=>
        focused?<Icon name="home" size={22} color='black'/>:<Icon name="home" size={22} color='gray'/>
      }}
      />

      <Tab.Screen
      name="Profile"
      component={Mybottomtabs}
      options={{
        headerShown: false,
        tabBarActiveTintColor:'black',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:({focused})=>
        focused?<Icon name="person" size={22} color='black'/>:<Icon name="person" size={22} color='gray'/>
      }}
      />

      <Tab.Screen
      name="Resourse"
      component={Mybottomtabs}
      options={{
        headerShown: false,
        tabBarActiveTintColor:'black',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:({focused})=>
        focused?<Icon name="sync" size={22} color='black'/>:<Icon name="sync" size={22} color='gray'/>
      }}
      />

    

    </Tab.Navigator>
    </View>
  )
}

function Mydrawer(){
  return(
    <Drawer.Navigator initialRouteName="Coins">

       <Drawer.Screen
        name="Coins"
       component={Coins}/>

       <Drawer.Screen
       name="Activities"
       component={Activities}/>

       <Drawer.Screen
       name="Grade"
       component={Grade}/>


     </Drawer.Navigator>
   )
 }

 function Mybottomtabs(){
  return(

    
    <Bottomtab.Navigator
    screenOptions={{
      tabBarLabelStyle:{fontSize:12},
      tabBarItemStyle:{width:100},
      tabBarStyle:{backgroundColor:'white'}
    }}>

 <Bottomtab.Screen
 name="Games"
 component={Games}
 options={{
  headerShown: false,
  tabBarActiveTintColor:'black',
  tabBarInactiveTintColor:'gray',
  tabBarIcon:({focused})=>
  focused?<Icon name="toys" size={22} color='black'/>:<Icon name="toys" size={22} color='gray'/>
}}
 
 
 />

<Bottomtab.Screen
 name="Photoss"
 component={Photos}
 options={{
  headerShown: false,
  tabBarActiveTintColor:'black',
  tabBarInactiveTintColor:'gray',
  tabBarIcon:({focused})=>
  focused?<Icon name="slideshow" size={22} color='black'/>:<Icon name="slideshow" size={22} color='gray'/>

  }}/>

<Bottomtab.Screen
 name="Muisics"
 component={Musics}
 options={{
  headerShown: false,
  tabBarActiveTintColor:'black',
  tabBarInactiveTintColor:'gray',
  tabBarIcon:({focused})=>
  focused?<Icon name="music-note" size={22} color='black'/>:<Icon name="music-note" size={22} color='gray'/>
  }}/>

    </Bottomtab.Navigator>
    
  )
 }


function App(){
  return(
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
  )
}
export default App
