import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

const Tab1Screen = () => {


    const {top} = useSafeAreaInsets();
    useEffect(() => {
        console.log("Tab 1")
    }, [])

    return (
        <View style={{
                     ...styles.globalMargin,
                     marginTop: top + 10
                     }}>
            <Text> Iconos </Text>

            <Text> 
             
              <TouchableIcon iconName="bonfire-outline" />
              <TouchableIcon iconName="car-outline" />
              <TouchableIcon iconName="game-controller-outline" />
              <TouchableIcon iconName="skull-outline" />
              <TouchableIcon iconName="thumbs-up-outline" />
            </Text>
        </View>
    )
}

export default Tab1Screen
