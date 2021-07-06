import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, StatusBar, Image,  ScrollView} from 'react-native'
import { WebView } from 'react-native-webview';


export default function Trabajo(props) {
    //falta agregar la funcion de buscar el rubro por su id y de importar el json

    const trabajo = props.navigation.state.params;
    const link = props.navigation.state.params.uriPicture
    const image = { uri: link }
    const linkVid = props.navigation.state.params.video
    const vid = { uri: linkVid }
    return (
        <ScrollView>
            <Text style={styles.title}>{trabajo.name}</Text>
            <Text style={styles.text}>
                Rubro: {trabajo.rubro} {"\n"}
                Descripción: {trabajo.description} {"\n"}
            </Text>
             <Image source={image} style={styles.image} />
            
        <View style={styles.WebViewStyle}>
        <WebView
                source={vid}
                javaScriptEnabled={true}
                domStorageEnabled={true}/>
        </View>
            
        
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Reserva', trabajo)}>
            
                <Text style={styles.buttonText}>Reservar Ahora</Text>
            </TouchableOpacity>
        </ScrollView>
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
    margin: 10,
    backgroundColor: "black",
    height: 350,
},
});

