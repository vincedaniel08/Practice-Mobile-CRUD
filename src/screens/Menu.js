import React from 'react'

import {  StyleSheet , Text, View, TouchableOpacity,Image } from 'react-native';





export default function Menu({ navigation }) {

  

    return (
        <View style={styles.container}>

        <Image source={require('../Images/adaptive-icon.png')}
        style={{width: 300, height: 300 , marginTop: -90}} />

        <Text style={styles.text}> Million of song.</Text>
        <Text style={styles.text}> Free on Reverb</Text>
        <TouchableOpacity style={styles.button}>

      <Text style={styles.btntext} onPress={() => navigation.navigate('Sign In')} > SIGN IN</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.buttonNew}>
      <Text style={styles.btntext} onPress={() => navigation.navigate('Sign Up')} > SIGN UP</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.buttonForgot}>
      <Text style={styles.btntextforgot}  onPress={() => navigation.navigate('Forgot Password')}> FORGOT PASSWORD</Text>
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
    btntext:{
        color: '#fff',
        textAlign: "center",
        fontSize: 15,
    
      },

      btntextforgot:{
        color: 'black',
        textAlign: "center",
        fontSize: 15,
    
      },

    button:{
        height: 50,
        backgroundColor: '#e64d3b',
        padding: 5,
        borderRadius: 20,
        marginTop: 17,
        width: 280,
        textAlign: 'center',
        padding: 10,
        height: 45,
        borderRadius: 30,
        
        
    
      },

      buttonNew:{
        height: 50,
        backgroundColor: '#323232',
        padding: 5,
        borderRadius: 20,
        marginTop: 17,
        width: 280,
        textAlign: 'center',
        padding: 10,
        height: 45,
        borderRadius: 30,
        
        
    
      },

      buttonForgot:{
        height: 50,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 20,
        marginTop: 17,
        width: 280,
        textAlign: 'center',
        padding: 10,
        height: 45,
        borderRadius: 30,
        
        
    
      },
      text:{

        color: 'white',
        fontSize: 40,
        marginBottom: 5,
       
        

      }
});