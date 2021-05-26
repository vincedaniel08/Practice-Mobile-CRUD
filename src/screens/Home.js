import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, Modal, Pressable } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';





export default function Home({ navigation }) {

  
    const botPay = () => {

      
        navigation.navigate('Payment');

    }





    




    return (

        <View style={styles.container}>
            <Text style={styles.title}>Weapon Market App</Text>

            <ScrollView>

               





<Card>
                    <Card.Title>Nerve Gear</Card.Title>
                    <Card.Divider />
                    <Card.Image source={require('../Images/Product.jpg')}>
                       
                        <Button
                              onPress={botPay}
                            icon={<Icon name='code' color='#ffffff' />}
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='Buy' />
                    </Card.Image>
                    <Text style={{ marginTop: 10, marginBottom: 20 ,  color: 'black' }}>
                        Price : 500 pesos  </Text>

                    <Text style={{ marginBottom: 20 }}>
                        The NerveGear (ナーヴギア, Nāvugia?) is the second generation1 of FullDive technology made by Kayaba Akihiko.  </Text>
                </Card>

                <View style={styles.centeredView}>
     
     
    </View>


            </ScrollView>
        </View>


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',


    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 40,
        margin: 10,
        marginLeft: 15,
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },

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
});