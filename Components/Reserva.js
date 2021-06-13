import React from 'react'
import { TextInput, Text, View, FlatList, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        alignSelf:'center'
    },
    loginText: {

    },
    inputText: {
        height: 40,
        marginTop: 0,
        borderRadius: 7,
        padding: 5,
        marginBottom: 15,
        borderBottomWidth: 1,
        width: 280
    },
    inputTextBig: {
        height: 100,
        marginTop: 0,
        borderRadius: 7,
        padding: 5,
        marginBottom: 15,
        borderBottomWidth: 1,
        width: 280,
        alignSelf: 'flex-start'
    },
    button: {
        padding:10,
        backgroundColor:'#99ffff',
        width:200,
        borderRadius:15,
        alignItems:'center',
        alignSelf:'center',
        marginTop:10
    },
    login: {
        marginTop:70
    },

    titulo: {
        fontSize:30,
        marginTop:20
    }
});

export default function Reserva() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>¡Haga su Reserva!</Text>
            <View style={styles.login}>
                <Text>Email</Text>
                <TextInput style={styles.inputText} placeholder='Introduzca su Email'/>
                <Text>Reserva</Text>
                <TextInput style={styles.inputTextBig} multiline={true} numberOfLines={4} placeholder='Introduzca su Reserva'/>
                <TouchableOpacity style={styles.button} onPress={() => loginCheck(navigate)}>
                    <Text>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
