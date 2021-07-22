import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext';

const AlbumsScreen = () => {


    const  {logout, authState} = useContext(AuthContext);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Albums</Text>

            {
                authState.isLoggedIn && (
                            <Button
                                title="Logout"
                                 onPress = { logout }
                            />
                )
            }
            
        </View>
    )
}

export default AlbumsScreen
