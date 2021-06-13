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
        title: 'Lista de Empresas'
    },
    {
        id: '2',
        title: 'Lista de Profesionales'
    },
    {
        id: '3',
        title: 'Lista de Rubros'
    },
    {
        id: '4',
        title: 'Lista de Trabajos'
    }
];

const Item = ({ title }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
);

export default function MainMenu({navigation}){
    const renderItem = ({ item }) => (
        <Item title={item.title} />
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
