import React, { useState } from "react";

import {  Alert, StyleSheet,Input , Text, View, TextInput, TouchableOpacity,Image} from 'react-native';




export default function ForgotPassword({ navigation }) {


    const [payload, setPayload]= useState({
      
        email:"",
        
    
      });
    
      const handleChange = (prop) => (text) =>{
        setPayload({...payload, [prop]: text});
      };

    return (
        <View style={styles.container}>
         <Image source={require('../Images/adaptive-icon.png')}
        style={{width: 300, height: 300 , marginTop: -150}} />
        <Text style={styles.text}> Forgot Password?</Text>
    
        <TextInput style={styles.input} placeholder="Email Address"  
         onChangeText={handleChange("email")}
        selectionColor="darkgray"
          value={payload.username} 
          ></TextInput>

        <TouchableOpacity style={styles.button}>
      <Text style={styles.btntext}  > Send</Text>
     </TouchableOpacity>
    

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },

      input:{
        fontSize: 15,
        borderWidth: 1,
        marginBottom: 20,
        marginTop: 10,
        padding: 10,
        backgroundColor: 'white',
        borderColor: '#e64d3b',
        width: 280,
        color: '#e64d3b',
        marginBottom: 4,
        height: 45,
        borderRadius: 30,
      },
      
   
    btntext:{
        color: '#fff',
        textAlign: "center",
        fontSize: 15,
    
      },

     

    button:{
        height: 50,
        backgroundColor: '#e64d3b',
        padding: 5,
        marginBottom: 2 ,
        borderRadius: 20,
        marginTop: 15,
        width: 280,
        textAlign: 'center',
        padding: 10,
        marginBottom: 4,
        height: 45,
        borderRadius: 30,
        
        
    
      },

     

      
      text:{

        color: 'white',
        fontSize: 30,
        marginBottom: 25,
        fontWeight: 'bold',

      }
});