import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login';
import MainMenu from './Components/MainMenu'
import ListaEmpresa from './Components/ListaEmpresa'
import ListaRubro from './Components/ListaRubro'
import ListaTrabajo from './Components/ListaTrabajo'
import ListaProfesional from './Components/ListaProfesional'
import Empresa from './Components/Empresa'
import Rubro from './Components/Rubro'
import Trabajo from './Components/Trabajo'
import Profesional from './Components/Profesional'
import { createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

const MainNav = createStackNavigator({
  Login: {screen: Login},
  MainMenu: {screen: MainMenu},
  ListaEmpresa: {screen: ListaEmpresa},
  ListaRubro: {screen: ListaRubro},
  ListaTrabajo: {screen: ListaTrabajo},
  ListaProfesional: {screen: ListaProfesional},
  Empresa: {screen: Empresa},
  Rubro: {screen: Rubro},
  Trabajo: {screen: Trabajo},
  Profesional: {screen: Profesional},
});

const App = createAppContainer(MainNav);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;