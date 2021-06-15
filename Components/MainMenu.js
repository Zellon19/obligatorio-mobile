import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, ImageBackground} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#9bbbfb',
        paddingTop: 50,

    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 15,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 6, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
    },
    title: {
        fontSize: 25,
        color: 'black',
        alignSelf: 'center'
    },
    aboutUs: {
        backgroundColor: 'black',
        padding: 20,
        marginVertical: 30,
        marginHorizontal: 16,
        borderRadius: 15,
        
    },
    aboutUsText: {
        fontSize: 25,
        color: 'white',
        alignSelf: 'center'
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

            <TouchableOpacity style={styles.aboutUs} onPress={() => navigation.navigate('AboutUs')}>
                <Text style={styles.aboutUsText}>
                    Sobre Nosotros
                </Text>
            </TouchableOpacity>
        </View>
    );
}
