import React from 'react'
import { ScrollView, View, Text, StyleSheet,Image} from 'react-native'



export default function AboutUs() {
    const image = {
        uri: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v19-pla-99-mockups_2.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=fe2f87a0657b63bbced72b6160839dae'
    }
    return (
        <ScrollView>
            <Text style={styles.title}>Información General</Text>
            <Text style={styles.paragraph}>
                Está aplicación fue desarrollada por Axel Alvarez, Pablo Lignelli y Sofía Olaverry durante el mes de junio de 2021, entregado como requisito para la obtención del título de
                Analista Programador. 
            </Text>
        
            <Image source={image} style={styles.image}/>
            <Text style={styles.title}>Términos y Condiciones</Text>
            <Text style={styles.paragraph}>
                Estos Términos y Condiciones regulan la descarga, acceso y utilización de la aplicación móvil que el grupo pone
                a disposición de los usuarios.
                Esta versión de la aplicación está disponible en forma gratuita. El acceso a la misma, supone que el usuario
                reconoce y ha aceptado sin reservas las presentes condiciones de uso. {"\n"}

                1. Objeto
                La aplicación tiene el objetivo del entretenimiento, siendo apta para todo público.
                En el diseño y desarrollo de ésta, han intervenido todos los miembros del equipo, realizando un exhaustivo período
                de prueba.
                Funciona en un teléfono móvil Android o iOS.
                2.Derechos de propiedad intelectual
                Los derechos de propiedad intelectual e industrial sobre la aplicación son titularidad de Axel Alvarez, Pablo 
                Lignelli y Sofía Olaverry, correspondiéndosle el ejercicio exclusivo de los derechos de explotación de los mismos
                en cualquier forma y, en especial, los derechos de reproducción distribución, comunicación pública y transformación
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 20,
        fontFamily: 'Futura'
    },
    paragraph: {
        fontSize: 15,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        fontFamily: 'Futura'
        
    },
    image: {
        width: 380, 
        height: 290,
        alignSelf: 'center',
    }
})