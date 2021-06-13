import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#10f4f3',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    }
});

const data = [
    {
        id: '1',
        title: 'Lista de Empresas',
        navigateTo: 'ListaEmpresa'
    },
    {
        id: '2',
        title: 'Lista de Profesionales',
        navigateTo: 'ListaProfesional'
    },
    {
        id: '3',
        title: 'Lista de Rubros',
        navigateTo: 'ListaRubro'
    },
    {
        id: '4',
        title: 'Lista de Trabajos',
        navigateTo: 'ListaTrabajo'
    }
];

export default function MainMenu({ navigation }) {
    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.navigateTo)}>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
                <Text>
                    Sobre Nosotros
                </Text>
            </TouchableOpacity>
        </View>
    );
}
