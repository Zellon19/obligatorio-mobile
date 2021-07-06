import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native'
import { WebView } from 'react-native-webview';


export default function Trabajo(props) {
    //falta agregar la funcion de buscar el rubro por su id y de importar el json

    const trabajo = props.navigation.state.params;
    const link = props.navigation.state.params.uriPicture
    const image = { uri: link }
    return (
        <View>
            <Text style={styles.title}>{trabajo.name}</Text>
            <Text style={styles.text}>
                Rubro: {trabajo.rubro} {"\n"}
                Duración: {trabajo.duration} {"\n"}
                Descripción: {trabajo.description} {"\n"}
            </Text>
             <Image source={image} style={styles.image} />
             <WebView
        source={{
          uri: 'https://github.com/facebook/react-native'
        }}
        style={{ marginTop: 20 }}
      />
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Reserva', trabajo)}>
            
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
        fontSize: 20,
        fontFamily: 'Futura'
    },
    text: {
        marginLeft: 10,
        fontFamily: 'Futura',
        marginRight: 10,

    },
    title:{
        fontFamily: 'Futura',
        alignSelf:'center',
        fontSize: 25,

    }, 
    image: {
        width: 300, 
        height: 250,
        alignSelf: 'center',
        margin: 0, 
        resizeMode: 'contain',
       
      
    },
    WebViewStyle: {
        margin: 20,
    },
});