import React, { Component } from 'react'
import { FlatList, Text, View, TouchableOpacity, StyleSheet, StatusBar, Image,  ScrollView} from 'react-native'
import { WebView } from 'react-native-webview';
import Profesional from './Profesional';

const empresas = require('../info/empresas.json');
const profesionales = require('../info/profesionales.json')

function empleadosEmpresa(pTrabajo){
    let emp = '';
    empresas.forEach(empresa =>{
        empresa.trabajos.forEach(trabajo =>{
            if(trabajo.id == pTrabajo.id){
                emp = empresa;
            }
        })
    })
    let arrProfs = [];
    emp.profs.forEach(prof =>{
        profesionales.forEach(profesional => {
            if(prof.id == profesional.id){
                arrProfs.push(profesional);
            }
        })
        
    })

    return arrProfs;

}

export default function Trabajo(props) {

    const trabajo = props.navigation.state.params;
    const link = trabajo.uriPicture
    const image = { uri: link }
    const linkVid = trabajo.video
    const vid = { uri: linkVid }
    let data = [];


    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.buttonEmp}onPress={() => {
            props.navigation.navigate('Profesional', item);
        }}>
            <Text style={styles.buttonTextEmp}> {item.name}</Text>
        </TouchableOpacity>
    );

    if(trabajo.promPor == 'Empresa'){
        data = empleadosEmpresa(trabajo);
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
            <Text Text style={styles.title}>Empleados de la Empresa</Text>
            <View>
                <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id}/>
            </View>
            
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Reserva', trabajo)}>
                    <Text style={styles.buttonText}>Reservar Ahora</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
    else{
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
buttonEmp:{
    padding: 10,
    backgroundColor: '#aaffef',
    width: 180,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    width: 400,
    marginRight: 15,
},
buttonTextEmp:{
    fontFamily: 'Futura',
    fontSize:  15
}

});

