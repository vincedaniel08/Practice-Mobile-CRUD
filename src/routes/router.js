import React, { Component } from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "../screens/Home";
import Discover from "../screens/Discover";
import Profile from "../screens/Profile";




const Tab = createMaterialBottomTabNavigator();


function Tabs() {
  return (

    <Tab.Navigator initialRouteName="Home"
      activeColor="#e64d3b"
      inactiveColor="gray"
      barStyle={{ backgroundColor: 'black' }}>

      <Tab.Screen name="Home"
        component={Home}
        options={{

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Discover"
        component={Discover}
        options={{

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="compass" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen name="Profile"
        component={Profile}
        options={{

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name={"account"} color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>



  )
}

export default Tabs;