import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Image } from 'react-native';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();




export const  MenuLateral = () => {

  const { width} = useWindowDimensions();

  return (
    <Drawer.Navigator
        drawerType={ width >= 768 ? 'permanent' : 'front'}
        drawerContent = {(props) => <MenuInterno { ...props}/>}
    >
      <Drawer.Screen name="Tabs"  component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

{/* Menu Interno */}


const MenuInterno = ( {navigation}: DrawerContentComponentProps<DrawerContentOptions>) => {

     return(
         <DrawerContentScrollView>
                <View style={styles.avatarContainer}>
                     <Image
                        source={{
                            uri: 'https://actiserver.com/wp-content/uploads/avatar-1-300x300.png'
                        }}
                        style={styles.avatar}
                     />
                </View>

                {/* Opciones de Menu */}
                
                <View style={styles.menuContainer}>

                     <TouchableOpacity style={{...styles.menuBoton,
                                              flexDirection: 'row'
                                             }}
                                       onPress={()=> navigation.navigate('Tabs')}
                     >
                         <Icon name="compass-outline" size={23} color="#900"/>
                         <Text style={styles.menuTexto}>Navegación</Text>
                     </TouchableOpacity>

                     <TouchableOpacity style={{...styles.menuBoton,
                                              flexDirection: 'row'
                                             }}
                                       onPress={()=> navigation.navigate('SettingsScreen')}
                     >
                        <Icon name="cog-outline" size={23} color="#900"/>
                         <Text style={styles.menuTexto}>Ajustes</Text>
                     </TouchableOpacity>

                </View>

         </DrawerContentScrollView>
     );
}