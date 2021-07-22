import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const Tab3Screen = () => {

    useEffect(() => {
        console.log("Tab 3")
    }, [])

    return (
        <View>
            <Text>Tab 3</Text>
        </View>
    )
}

export default Tab3Screen
