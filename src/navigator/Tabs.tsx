import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import Tab3Screen from '../screens/Tab3Screen';
import StackNavigator from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';


export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS/> : <TabsAndroid/>
}

const BottomTabsAndroid = createMaterialBottomTabNavigator();

export const TabsAndroid = () => {
  return (
    <BottomTabsAndroid.Navigator
        sceneAnimationEnabled={true}
        barStyle={{
            backgroundColor: colores.primary
        }}
        screenOptions={ ({route}) =>({
          tabBarIcon: ({color, focused}) => {
               
               let iconName: string = '';

               switch( route.name ){
                   case 'Tab1Screen':
                     iconName = 'T1'
                   break;
                   case 'TopTabNavigator':
                     iconName = 'T2'
                   break;
                   case 'StackNavigator':
                     iconName = 'ST'
                   break;
                   
               }
               return <Icon name="airplane-outline" size={80} color="#900"/>
          }
      })}
    >
      <BottomTabsAndroid.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabsAndroid.Screen name="TopTabNavigator" options={{title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabsAndroid.Screen name="StackNavigator" options={{title: 'Tab3'}} component={StackNavigator} />
    </BottomTabsAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        tabBarOptions={{
             activeTintColor: colores.primary,
             style:{
               borderTopColor:  colores.primary,
               borderTopWidth: 0,
               elevation: 0
             },
             labelStyle:{
                 fontSize: 15
             }
        }}
        screenOptions={ ({route}) =>({
            tabBarIcon: ({color, focused, size}) => {
                 
                 let iconName: string = '';

                 switch( route.name ){
                     case 'Tab1Screen':
                       iconName = 'bandage-outline'
                     break;
                     case 'TopTabNavigator':
                       iconName = 'basketball-outline'
                     break;
                     case 'StackNavigator':
                       iconName = 'bookmarks-outline'
                     break;
                     
                 }
                 return <Icon name={iconName} size={ 25} color={color}/>
            }
        })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Tab3'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}