import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ImageBackground } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginText: {

    },
    inputText: {
        height: 40,
        marginTop: 5,
        padding: 5,
        marginBottom: 15,
        borderWidth: 1,
        borderBottomColor: 'black',
        width: 230,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginRight: 15,
        borderRadius: 10,
    },
    button: {
        padding: 10,
        backgroundColor: 'black',
        width: 180,
        borderRadius: 15,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 30,
        width: 230,
        marginRight: 15
    },
    login: {
        marginTop: 20,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 25,
        marginTop: 110,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 610,

    },
    texto: {
        textTransform: 'uppercase',
        marginTop: 5,
        marginLeft: 10,
    },
    buttonText: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 17
    },
    forgot: {
        textDecorationLine: 'underline',
        color: 'blue',
        fontFamily: 'Futura'
    }
});
const users = require('../info/users.json')
let username = '';
let password = '';

function loginCheck(navigate) {
    let test = false;
    users.forEach(user => {
        if (user.user === username.trim() && user.password === password.trim()) {
            navigate('MainMenu')
            test = true;
        }
    })
    if (!test) {
        Alert.alert('Login', 'Datos Incorrectos')
    }

}

export default function Registrarse(props) {
    const { navigate } = props.navigation;
    const image = { uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm183-nunny-09.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=fcfe47e3cbf7a98dbb5939dd78386cfa" };
    return (
        <View>
            <ImageBackground source={image} style={styles.image}>

                <Text style={styles.titulo}>¡Regístrate!</Text>
                <View style={styles.login}>
                    <Text style={styles.texto}>Usuario</Text>
                    <TextInput onChangeText={(text) => username = text} style={styles.inputText} placeholder='Introduce el usuario' />
                    <Text style={styles.texto}>Contraseña</Text>
                    <TextInput onChangeText={(text) => password = text} style={styles.inputText} placeholder='Introduce la contraseña' secureTextEntry={true} />
                    <TouchableOpacity style={styles.button} onPress={() => loginCheck(navigate)}>
                        <Text style={styles.buttonText}>Ingresar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}