import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loginText: {

    },
    inputText: {

    },
    button: {

    }
});

export default function Login() {
    return (
        <View style={styles.container}>
            <Text> Login </Text>
            <Text>Usuario</Text>
            <TextInput placeholder='Introduce el usuario'/>
            <Text>Contraseña</Text>
            <TextInput placeholder='Introduce la contraseña'/>
            <Button title='Iniciar sesión' onPress={() => Alert.alert('Alert', 'Login btn')}/>
        </View>
    )
}
