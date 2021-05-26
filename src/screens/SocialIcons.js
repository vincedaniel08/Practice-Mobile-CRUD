import React from 'react'
import { View } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import firebase from "../utils/firebase";



export default function SocialIcons({ navigation }) {

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


    return (
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
    )
}
