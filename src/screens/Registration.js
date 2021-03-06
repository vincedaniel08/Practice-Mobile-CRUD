import React, { useState } from "react";
import {  Alert, StyleSheet, Text, View, TextInput, TouchableOpacity,Image} from 'react-native';


import firebase from "../utils/firebase";
import { SocialIcon } from 'react-native-elements';
const createTwoButtonAlert = () => {


  Alert.alert(
    "De Leon, Vince Daniel P.",
    "BSIT - 3B",
    [
     
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  ); }
  
 


export default function Registration ({ navigation }) {

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


  const [payload, setPayload]= useState({
      
      
    email:"",
    password:"",
    confirmpassword:"",

  });

  const handleChange = (prop) => (text) =>{
    setPayload({...payload, [prop]: text});
  };



  const botsignin = () => {

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

    if (!payload.confirmpassword) {
      alert('Please fill Confirm Password');
      return;
    }

    if (payload.password.length <5) {
      alert('Password should be at least 6 character');
      return;
    }
    if (payload.password != payload.confirmpassword) {
      alert('Password and Confirm Password does not match');
      return;
    }
   
    

   
    else{
        
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((userCredential) => {
          var user = userCredential.user;
          alert('Registerd');
        
          navigation.navigate('Sign In')

          

        });
    }
      
      }

        

    
  

    
  
    return (
      
        <View style={styles.container}>
          <Image source={require('../Images/adaptive-icon.png')}
        style={{width: 300, height: 300 , marginTop: -20}} />

       

        <TextInput style={styles.input} placeholder="Email Address"  
          selectionColor="darkgray" textContentType="emailAddress"
          value={payload.email} onChangeText={handleChange("email")}
          ></TextInput>
         

        <TextInput style={styles.input} placeholder="Password" 
          selectionColor="darkgray"
         value={payload.password} onChangeText={handleChange("password")}
         secureTextEntry={true}></TextInput>

         <TextInput style={styles.input} placeholder="Confirm Password" 
          selectionColor="darkgray"
         value={payload.confirmpassword} onChangeText={handleChange("confirmpassword")}
         secureTextEntry={true}></TextInput>
       
      <TouchableOpacity style={styles.button}>
      <Text style={styles.btntext} onPress={botsignin}>SIGN UP</Text>
     </TouchableOpacity>

     
     <Text style={styles.loginwithtext}>OR SIGN UP WITH</Text>
     
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
      backgroundColor: 'white',
      padding: 10,
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
        marginBottom: 15,
        marginTop: 15,
    
      },
    
    button:{
      height: 50,
      backgroundColor: '#efab07',
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
    buttonNew:{
        height: 50,
        backgroundColor: '#FF3A3A',
        padding: 5,
        marginBottom: 2 ,
        borderRadius: 20,
        marginTop: 8,
        width: 280,
        textAlign: 'center',
        padding: 10,
        marginBottom: 4,
        opacity: 0.5,
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
        backgroundColor: 'white',
        padding: 5,
        marginBottom: 2 ,
        marginTop: 10 ,
        borderRadius: 20,
        width: 200,
        textAlign: 'center',
        padding: 10,
        height: 45,
        borderRadius: 30,
        
        
    
      },
      btntextForgot:{
        color: 'black',
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
    
      },
      
  });
  