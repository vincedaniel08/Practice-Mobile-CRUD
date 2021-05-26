
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Menu from "./src/screens/Menu";
import Payment from "./src/screens/Payment";
import Login from "./src/screens/Login";
import Registration from "./src/screens/Registration";
import ForgotPassword from "./src/screens/ForgotPassword";
import Tabs from "./src/routes/router";
import SocialIcons from './src/screens/SocialIcons';

const Stack = createStackNavigator();

function StackNav() {



  return (

    <Stack.Navigator initialRouteName="Menu">

      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'black',
            borderBottomColor: 'black'

          },
          headerTintColor: '#fff',
        }}
      />



      <Stack.Screen
        name="Sign In"
        component={Login}
        options={{
          title: 'Sign In',
          headerStyle: {
            backgroundColor: 'black',
            borderBottomColor: 'black'
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Sign Up"
        component={Registration}
        options={{
          title: 'Sign Up',
          headerStyle: {
            backgroundColor: 'black',
            borderBottomColor: 'black'
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Forgot Password"
        component={ForgotPassword}
        options={{
          title: 'Forgot Password',
          headerStyle: {
            backgroundColor: 'black',
            borderBottomColor: 'black'
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerShown: false,
          title: 'Tabs',
          headerStyle: {
            backgroundColor: 'black',
            borderBottomColor: 'black'

          },
          headerTintColor: '#fff',
        }}
      />

<Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'black',
            borderBottomColor: 'black'

          },
          headerTintColor: '#fff',
        }}
      />


      

    </Stack.Navigator>



  )
}
export default function App() {


  return (

    <NavigationContainer>
      <StackNav />
    </NavigationContainer>

  );
}
