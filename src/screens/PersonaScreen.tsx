import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

/*interface RouterParams {
    id:number;
    nombre: string;
}*/

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

const PersonaScreen = ( {navigation, route}: Props) => {

   //const params = route.params as RouterParams;
   const params = route.params;
   const { changeUsername } = useContext(AuthContext);
 
   useEffect(() => {
       navigation.setOptions({
            title: params.nombre
       })
   }, [])

   useEffect(() => {
            changeUsername(params.nombre)
    }, [])

    return (
        <View style={styles.globalMargin}>

                <Text style={styles.title}>Persona Screen
                {
                    JSON.stringify(params,null,3)
                }
                </Text>
        </View>
    )
}

export default PersonaScreen
function userContext(AuthContext: React.Context<import("../context/AuthContext").AuthContextProps>): {} {
    throw new Error('Function not implemented.');
}

