import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native'

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
const users = require('../info/users.json')
let username = '';
let password = '';

function loginCheck(navigate){
    let test = false;
    users.forEach(user => {
        if(user.user == username && user.password == password){
            navigate('MainMenu')
            test = true;
        }
    })
    if(!test){
        Alert.alert('Login', 'Datos Incorrectos')
    }
    
}

export default function Login(props) {
    const {navigate} = props.navigation;
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>¡Bienvenido de Vuelta!</Text>
            <View style={styles.login}>
                <Text>Usuario</Text>
                <TextInput onChangeText={(text) => username = text} style={styles.inputText} placeholder='Introduce el usuario'/>
                <Text>Contraseña</Text>
                <TextInput onChangeText={(text) => password = text} style={styles.inputText} placeholder='Introduce la contraseña' secureTextEntry={true}/>
                <TouchableOpacity onPress={() => Alert.alert('Jodete')}>
                    <Text>¿Olvidaste tu Contraseña?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => loginCheck(navigate)}>
                    <Text>Ingresar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
