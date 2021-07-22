import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext';

const ContactsScreen = () => {

    const { signIn, authState } = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}>
           <Text>Constact</Text> 

           {
               !authState.isLoggedIn ? (
                   <Button title="SignIn"
                   onPress={ signIn }
                 />):null
           }
          
        </View>
    )
}

export default ContactsScreen
