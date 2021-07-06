import React from 'react'
import { TextInput, Text, View, FlatList, TouchableOpacity, StyleSheet, StatusBar, ImageBackground } from 'react-native';

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
        padding: 5, 
        marginBottom: 15,
        borderWidth: 1, 
        borderBottomColor:'black',
        width: 230,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginRight: 15,
        borderRadius: 10, 
    },

    inputTextBig: {
        height: 100,
        marginTop: 5,
        borderRadius: 10,
        padding: 5,
        marginBottom: 15,
        borderWidth: 1, 
        borderBottomColor:'black',
        width: 230,
        alignSelf: 'flex-start',
        backgroundColor: 'white',
    },
    button: {
        padding:10,
        backgroundColor:'black',
        width:180,
        borderRadius:15,
        alignItems:'center',
        alignSelf:'center',
        marginTop: 30,
        width: 230,
        marginRight: 15,
    },
    login: {
        marginTop:70,
        alignSelf: 'center'
    },

    titulo: {
        fontSize:30,
        marginTop:20,
        alignSelf: 'center',
        marginBottom: 10, 
    },
    buttonText: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 17
    },
    image:{
        height: 610,
        
        
  
    },
});

const rubros = require('../info/rubros.json');
const empresas = require('../info/empresas.json');
const profs = require('../info/profesionales.json');


let emailA = '';

function buscarEmpresa(item){
    empresas.forEach(empresa =>{
        empresa.trabajos.forEach(trabajo =>{
            if(trabajo.id == item.id){
                console.log(empresa.fichaTecnica.email)
                emailA = empresa.fichaTecnica.email;
            }
        })
    })
}

function buscarProf(item){
    console.log(profs)
    profs.forEach(prof =>{
        prof.trabajos.particular.forEach(trabajo =>{
            if(trabajo.id == item.id){
                emailA = prof.email;
            }
        })
    })
}

let email = "";
let cuerpo = "";

function mandarEmail(item){

    if(item.promPor == 'Empresa'){
        buscarEmpresa(item);
    }
    else{
        buscarProf(item);
    }

    var data1 = {
        service_id: 'default_service',
        template_id: 'template_ael44p9',
        user_id: 'user_1L0OEgoF7wrQCcwGgPx1l',
        template_params: {
            'email': emailA,
            'body': cuerpo
        }
    };

    var data2 = {
        service_id: 'default_service',
        template_id: 'template_h544vug',
        user_id: 'user_1L0OEgoF7wrQCcwGgPx1l',
        template_params: {
            'email': email
        }
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data1)
      });

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data2)
    });

} 


export default function Reserva(props) {
    const item = props.navigation.state.params;
    const image = { uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm183-kul-06.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e9f3cf90b2b21d37f0f162e43c098687" };
    return (
        <View>
            <ImageBackground source={image} style={styles.image}>      
            
            <View style={styles.login}>
            <Text style={styles.titulo}>¡Haga su Reserva!</Text>
                <Text>Email</Text>
                <TextInput style={styles.inputText} onChangeText={(text) => email = text} placeholder='Introduzca su Email'/>
                <Text>Comentario</Text>
                <TextInput style={styles.inputTextBig} onChangeText={(text) => cuerpo = text} multiline={true} numberOfLines={4} placeholder='Introduzca su Comentario'/>
                <TouchableOpacity style={styles.button} onPress={() => mandarEmail(item)}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    )
}