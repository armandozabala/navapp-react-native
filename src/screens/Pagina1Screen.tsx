
import React, { useEffect } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any,any>{};

const Pagina1Screen = ( { navigation } : Props) => {


    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
               
                <TouchableOpacity 
                  onPress={()=> navigation.toggleDrawer()}
                  style={{ 
                       marginLeft: 10
                  }}  
                >
                     <Icon name="menu-outline" size={30} color={colores.primary}/>
                </TouchableOpacity>
           )
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina 1</Text>

            <Button
                title="Ir Pagina 2"
                onPress = { () => navigation.navigate('Pagina2Screen')}
            />

        
            <Text style={{ fontSize: 18,
                          marginVertical: 20,
                          marginLeft: 5
            }}> Navegar con Argumentos </Text>

            <View style={{flexDirection:'row'}}>

                <TouchableOpacity 
                style={{ ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                }}
                onPress={ () => navigation.navigate('PersonaScreen',{
                    id: 1,
                    nombre: 'Pedro'
                })}>
                       <Icon name="body-outline" size={40} color="#fff"/>
                    <Text style={styles.botonTexto}>Pedro</Text>
                </TouchableOpacity>



                <TouchableOpacity   style={{...styles.botonGrande,
                                             backgroundColor: '#FF9427'
                                    }} onPress={ () => navigation.navigate('PersonaScreen',{
                    id: 2,
                    nombre: 'Maria'
                })}>
                    <Icon name="woman-outline" size={40} color="#fff"/>
                    <Text style={styles.botonTexto}>Maria</Text>
                </TouchableOpacity>

            </View>
           

        

        </View>
    )
}

export default Pagina1Screen
