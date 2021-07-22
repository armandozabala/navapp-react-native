import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Pagina3Screen = () => {

    const navigator = useNavigation();

    useEffect(() => {

        navigator.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: 'Regresar'
        })

    }, [])

    return (
        <View style={styles.globalMargin}>
            
            <Text style={styles.title}>Pagina 2</Text>
            <Button
                title="ir Pagina 3"
                onPress = { () => navigator.navigate('Pagina3Screen')}
            />

        </View>
    )
}

export default Pagina3Screen
