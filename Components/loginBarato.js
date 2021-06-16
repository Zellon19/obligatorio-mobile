import React from 'react';
import { TextInput, View, TouchableHighlight, Text, StyleSheet } from 'react-native';
const Usuarios = require('../info/users.json'); // falta archivo dataUsers

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pass: '',
            acceso: ''
        };
    } static navigationOptions = {
        title: 'Login',
        headerStyle: {
            backgroundColor: '#071907',
        },
        headerTintColor: '#fff',
        height: 10,
    };
    render() {
        const { navigate } = this.props.navigation;
        const onPressButton = () => {
            const users = Usuarios;
            var valido = false;
            var i = 0;
            while (!valido && i < users.length) { // se puede cambiar por un foreach, mas simple
                if (this.state.name.trim() === users[i].user && this.state.pass.trim() === users[i].password) {
                    this.setState({ acceso: 'valido' });
                    navigate('MainMenu', { navegar: this.props.navigation },);
                    valido = true;
                } else {
                    this.setState({ acceso: 'Credenciales inválidas' })
                }
                i++;
            };
        };
        return (
            <View style={styles.container}>
                <View style={styles.containerTitle}>
                    <Text style={styles.instituto}> Institución </Text>
                    <Text style={styles.animalitos}> Animalitos </Text>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingrese su usuario"
                    onChangeText={(text) => this.setState({ name: text })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingrese su contraseña"
                    onChangeText={(text) => this.setState({ pass: text })}
                />
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="#A5C151"
                    onPress={onPressButton} >
                    <Text
                        style={styles.buttonText}>
                        INGRESAR
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#359245',
        flex: 1
    },
    containerTitle: {
        height: 110,
        backgroundColor: '#00432C',
        padding: 10,
        paddingLeft: 20
    },
    instituto: {
        fontSize: 15,
        backgroundColor: '#00432C',
        textAlign: 'left',
        color: '#fff',
    },
    animalitos: {
        fontSize: 40,
        backgroundColor: '#00432C',
        color: '#fff',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    mainImage: {
        height: 200,
    },
    button: {
        height: 50,
        backgroundColor: "#00432C",
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: "#fff",
        textAlign: 'center'
    },
    textInput: {
        marginTop: 10,
        fontSize: 20,
        backgroundColor: '#fff',
        height: 50,
    }
});
