import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";

import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TextInput,
    Alert,
    Image,
    TouchableOpacity,
    ViewComponent,

} from 'react-native';

import { Input } from 'react-native-elements';


export default function Payment ({ navigation }) {


    const createTwoButtonAlert = () => 
    Alert.alert(
      "De Leon, Vince Daniel P.",
      "BSIT - 3B",
      [
       
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
       
        
    const [payload, setPayload]= useState({
      
        amount:"",
  
      });
  
      const handleChange = (prop) => (text) =>{
        setPayload({...payload, [prop]: text});
      };
  

    
    const botPay = () => {
        var change; 
        if(payload.amount >= 500){

            change = payload.amount - 500;
            console.log(change);
            navigation.navigate('Tabs');

            alert(
                "You have successfully placed your order!:  "
                + "Change: " + change,
              
               
                
                [
                 
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
                
              ); 
            }

            else{
              alert(
                "Unsucessful Transact:\n Due inadequate balance  \n"
                + "balance: " + payload.amount,
              
               
                
                [
                 
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
                
              ); 
            }

        }

      
       

    


    return (
        <View>
              <Input placeholder="Credit Number" />
                <Input placeholder="Credit Pin" />
                <Input placeholder="Amount"  value={payload.amount} onChangeText={handleChange("amount")}/>
            
                <TouchableOpacity style={styles.buttonPay}>
                    <Text style={styles.btntext} onPress={botPay}> Pay</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

buttonPay: {
    height: 50,
    backgroundColor: '#e64d3b',
    padding: 5,
    marginBottom: 2,
    borderRadius: 20,
    width: '90%',
    marginStart: 20,
    position: 'relative',
    textAlign: 'center',
    padding: 10,
    marginBottom: 4,
    height: 45,
    borderRadius: 30,



},


btntext: {
    color: 'white',
    textAlign: "center",
    fontSize: 15,

},

})