import React, { Component } from 'react'
<<<<<<< Updated upstream
import { Text, View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { WebView } from 'react-native-webview';

export default function Trabajo(pItem) {
    //falta agregar la funcion de buscar el rubro por su id y de importar el json
=======
import { Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native'

export default function Trabajo(props){
>>>>>>> Stashed changes

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
               
                Video: {"\n"}
            </Text>
<<<<<<< Updated upstream

            <View style={styles.container}>
                <WebView
                    style={styles.WebViewStyle}
                    source={{ uri: 'https://www.youtube.com/embed/8Yue9YYdNLM' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => pItem.navigation.navigate('Reserva', item)}>

=======
             <Image source={image} style={styles.image} />
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Reserva', trabajo)}>
            
>>>>>>> Stashed changes
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
        width: 400, 
        height: 250,
        alignSelf: 'center',
        margin: 0, 
        resizeMode: 'contain',
       
      
    },
    WebViewStyle: {
        margin: 20,
    },
});