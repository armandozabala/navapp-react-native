import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const Tab2Screen = () => {

    useEffect(() => {
        console.log("Tab 2")
    }, [])

    return (
        <View>
            <Text>Tab 2</Text>
        </View>
    )
}

export default Tab2Screen
