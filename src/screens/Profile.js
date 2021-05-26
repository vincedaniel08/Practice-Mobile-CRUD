import React from 'react'
import firebase from "../utils/firebase";
import { Surface } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { Input } from 'react-native-elements';

import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TextInput,
    Alert,
    Image,
    TouchableOpacity,

} from 'react-native';




export default function Profile({ navigation }) {

    var user = firebase.auth().currentUser;
    var email, displayName, photoUrl;

    if (user != null) {

        email = user.email;
        displayName = user.displayName;
        photoUrl = user.photoURL;


    }




    const botlogout = () => {

        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            alert('Sign-out successful');
            navigation.navigate('Menu')

        }).catch((error) => {
            // An error happened.

        });



    }

   

    const renderOption = (icon, name, count) => {
        return (
            <View style={styles.options}>
                <View style={styles.left}>

                    <Icon name={icon} size={30} color="#000" />

                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <ScrollView>

                <View style={styles.info}>
                    <Surface style={styles.surface}>
                        <Image
                            source={photoUrl}
                            style={styles.profile}
                        />
                    </Surface>
                    <View style={styles.dataContainer}>
                        <Text style={styles.name}>{displayName}</Text>
                        <Text style={styles.uname}>{email}</Text>
                        <Text style={styles.uname}>10 Jan 2023</Text>
                    </View>
                </View>
                <View style={styles.divider} />
               
                <View style={styles.divider} />







                <Text style={[styles.titletwo, { marginTop: 10, fontSize: 18 }]}>
                    History
          </Text>


                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext} onPress={botlogout}> Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}






const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        margin: 10,
        marginLeft: 15,
    },

    button: {
        height: 50,
        backgroundColor: '#e64d3b',
        padding: 5,
        marginBottom: 2,
        borderRadius: 20,
        marginTop: 350,
        width: '90%',
        marginStart: 20,
        position: 'relative',
        textAlign: 'center',
        padding: 10,
        marginBottom: 4,
        height: 45,
        borderRadius: 30,



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
    info: {
        padding: 10,
        flexDirection: 'row',
    },

    surface: {
        height: 80,
        width: 80,
        borderRadius: 75,
        elevation: 15,
        overflow: 'hidden',
    },
    profile: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    dataContainer: {
        paddingLeft: 10,
    },
    name: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
    uname: {
        fontSize: 18,
        color: 'gray',
    },
    divider: {
        height: 10,
        backgroundColor: '#e5e5e5',
    },
    options: {
        height: 55,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5',
    },
    left: {
        flexDirection: 'row',
    },
    titletwo: {
        fontSize: 20,
        marginLeft: 15,
    },

});