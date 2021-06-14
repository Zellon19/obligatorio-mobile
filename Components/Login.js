import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity, ImageBackground } from 'react-native'

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
        marginTop: 5,
        borderRadius: 20,
        padding: 5,
        marginBottom: 15,
        borderWidth: 1,
        width: 280,
        borderColor: 'black',
        backgroundColor: 'white',
        alignSelf: 'center'
    },
    button: {
        padding:10,
        backgroundColor:'black',
        width:200,
        borderRadius:15,
        alignItems:'center',
        alignSelf:'center',
        marginTop: 30,
        width: 280,
    },

    login: {
        marginTop: 20,
        alignSelf:'center',
        justifyContent: 'center',
        
    },

    titulo: {
        fontSize:35,
        marginTop: 110,
        alignSelf:'center',
        justifyContent: 'center'
    },

    image:{
        height: 610,
        
  
    },
    texto:{
        textTransform: 'uppercase',
        marginTop: 5,
    },
    buttonText: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 17
    },
    forgot:{
        textDecorationLine: 'underline',
        color: 'blue',
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
    const image = { uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm232batch4-sasi-05_1.jpg?w=600&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b282a5a0f0e4125ea3d9f9d470b999f1" };
    return (
        <View>
                <ImageBackground source={image} style={styles.image}>
  
    
            <Text style={styles.titulo}>¡Bienvenido de Vuelta!</Text>
            <View style={styles.login}>
                <Text style={styles.texto}>Usuario</Text>
                <TextInput onChangeText={(text) => username = text} style={styles.inputText} placeholder='Introduce el usuario'/>
                <Text style={styles.texto}>Contraseña</Text>
                <TextInput onChangeText={(text) => password = text} style={styles.inputText} placeholder='Introduce la contraseña' secureTextEntry={true}/>
                <TouchableOpacity onPress={() => Alert.alert('Jodete')}>
                    <Text style={styles.forgot}>¿Olvidaste tu Contraseña?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => loginCheck(navigate)}>
                    <Text style={styles.buttonText}>Ingresar</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    )
}


