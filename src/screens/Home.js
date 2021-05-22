import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';




export default function Home({ navigation }) {
    
  
       
      

    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>Reverb Music App</Text>
            
            <ScrollView>
           
    
        </ScrollView>
        </View>
           
       
    )
} 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      
      
    },

    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 40,
        margin: 10,
        marginLeft: 15,
    }
});