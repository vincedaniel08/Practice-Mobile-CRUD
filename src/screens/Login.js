import React, { useState } from "react";
import {  Alert, StyleSheet, Text, View, TextInput, TouchableOpacity,Image} from 'react-native';

import { SocialIcon } from 'react-native-elements';
import firebase from "../utils/firebase";






const createTwoButtonAlert = () => {

  Alert.alert(
    "De Leon, Vince Daniel P.",
    "BSIT - 3B",
    [
     
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  ); }
  
  
  

export default function Login ({ navigation }) {

  const [loading, setLoading] = useState(false);

  const botgoogle = () => {

    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            navigation.navigate('Tabs')
           
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            alert(errorCode,email,credential,errorMessage);
        });
}

const botfacebook = () => {

  var provider = new firebase.auth.FacebookAuthProvider();

  firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // The signed-in user info.
          var user = result.user;

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var accessToken = credential.accessToken;
          navigation.navigate('Tabs')
          // ...
      })
      .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          alert(errorCode,email,credential,errorMessage);
      });
}

const botgithub = () => {

  var provider = new firebase.auth.GithubAuthProvider();

  firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          var token = credential.accessToken;

          // The signed-in user info.
          var user = result.user;
          navigation.navigate('Tabs')
          // ...
      }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          alert(errorCode,email,credential,errorMessage);
          
      });

}

  const botlogin = () => {

    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if (!payload.email) {
      alert('Please fill Email Address');
      return;
    }

    if (!pattern.test(payload.email)) {
      alert('Please enter valid email address');
      return;
    }
    if (!payload.password) {
      alert('Please fill Password');
      return;
    }

    

    if (payload.password.length <5) {
      alert('Password should be at least 6 character');
      return;
    }
    else{

      firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((userCredential) => {
        var user = userCredential.user;
        alert('You are successfully logged in');
      
        navigation.navigate('Tabs')

      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ..
      });

  }}

    const [payload, setPayload]= useState({
      
      email:"",
      password:"",

    });

    const handleChange = (prop) => (text) =>{
      setPayload({...payload, [prop]: text});
    };

  
    return (
      
        <View style={styles.container}>
        <Image source={require('../Images/adaptive-icon.png')}
        style={{width: 300, height: 300 , marginTop: 10, marginBottom: 20}} />

    
   
        <TextInput style={styles.input} placeholder="Email Address"  
        selectionColor="darkgray" textContentType="emailAddress"
          value={payload.email} onChangeText={handleChange("email")}
          ></TextInput>
        <TextInput style={styles.input} placeholder="Password" 
       selectionColor="darkgray"
         value={payload.password} onChangeText={handleChange("password")}
         secureTextEntry={true}></TextInput>
       
        <TouchableOpacity style={styles.button}>
      <Text style={styles.btntext} onPress={botlogin}>LOGIN</Text>
     </TouchableOpacity>

    
     <Text style={styles.loginwithtext}>OR LOGIN WITH</Text>
    

     <View
            style={{
              flex: .8,
              flexDirection: 'column',
              justifyContent: 'space-between',
              
              
            }}>

      <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
               

            
                  type="facebook"
                  onPress={() => {
                    botfacebook();
                   }}
                 />
                
              </View>
            
              
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon

                
                  type="github"
                  onPress={() => {
                    botgithub();
                   }}
                 />
                
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="google"
                  onPress={() => {
                   botgoogle();
                  }}
                />
                
                </View>
          </View>
            

        </View>
 
        
     
                
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
    
  
    icontext:{
      fontSize: 55,
      fontStyle: "italic",
      color: '#fc9803',
      marginBottom: 90,
    },
    
  
    input:{
      fontSize: 15,
      borderWidth: 1,
      marginBottom: 20,
      marginTop: 10,
      padding: 10,
      backgroundColor: 'white',
      borderColor: '#efab07',
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
    loginwithtext:{
        color: 'white',
        textAlign: "center",
        fontSize: 12,
        marginBottom: 25,
        marginTop: 30,
    
      },
    
    button:{
      height: 50,
      backgroundColor: '#efab07',
      padding: 5,
      marginBottom: 2 ,
      borderRadius: 20,
      marginTop: 15,
      width: 280,
      color: "#e64d3b",
      textAlign: 'center',
      padding: 10,
      marginBottom: 4,
      height: 45,
      borderRadius: 30,
      
      
  
    },
    buttonNew:{
        height: 50,
        backgroundColor: 'gray',
        padding: 5,
        marginBottom: 2 ,
        borderRadius: 20,
        marginTop: 10,
        width: 280,

        textAlign: 'center',
        padding: 10,
        marginBottom: 4,
        height: 45,
        borderRadius: 30,
        
        
    
      },
  
    buttondev:{
    
      height: 50,
      backgroundColor: 'black',
      padding: 10,
      marginBottom: 10 ,
      borderRadius: 20,
      marginTop: 50,
      width: 200,
      textAlign: 'center',
      padding: 10,
      
      
  
    },

    buttonForgot:{
        height: 20,
        padding: 5,
        opacity: 20,
        marginVertical: 20,
        marginTop: -60,
        borderRadius: 20,
        width: 200,
        textAlign: 'center',
        padding: 10,
        height: 45,
        borderRadius: 30,
        
        
    
      },
      btntextForgot:{
        color: 'white',
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
    
      },
      
  });
  