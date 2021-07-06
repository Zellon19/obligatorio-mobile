import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { WebView } from 'react-native-webview';

export default function Trabajo(pItem) {
    //falta agregar la funcion de buscar el rubro por su id y de importar el json

    const item = pItem.navigation.state.params;
    return (
        <View>
            <Text >{item.name}</Text>
            <Text style={styles.text}>
                Rubro: {item.rubro} {"\n"}
                Duración: {item.duration} {"\n"}
                Descripción: {item.description} {"\n"}
                Foto de presentación: {"\n"}
                Video: {"\n"}
            </Text>

            <View style={styles.container}>
                <WebView
                    style={styles.WebViewStyle}
                    source={{ uri: 'https://www.youtube.com/embed/8Yue9YYdNLM' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => pItem.navigation.navigate('Reserva', item)}>

                <Text style={styles.buttonText}>Reservar Ahora</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    button: {
        padding: 10,
        backgroundColor: 'black',
        width: 180,
        borderRadius: 15,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 30,
        width: 250,
        marginRight: 15,
    },
    buttonText: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 17
    },
    WebViewStyle: {
        margin: 20,
    },
});