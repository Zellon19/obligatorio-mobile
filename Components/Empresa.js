import React, { Component } from 'react'
import { Text, View } from 'react-native'

const ListaEmpresas = require('../info/empresas.json')

export default class Empresa extends Component {
    constructor(props){
        this.state = {empresa : {id:new Number(), nombre:'', ciudad:'', direccion:'', rubro:new Number(), fichaTecnica:'', foto:'', profesionales:[], trabajos:[]}}
    }

    cargarEmpresa(){
        ListaEmpresas.forEach(emp => {
            if(emp.id = this.props.id){
                this.setState({empresa : emp})
            }
        })
    }

    componentDidMount(){
        this.cargarEmpresa();
    }

    render() {
        return (
            <View>
                <Text> Información de una empresa exprimidora de clase baja pero nadie la quiere así que no te doy la info </Text>
            </View>
        )
    }
}
