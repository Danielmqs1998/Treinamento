import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, Feather } from '@expo/vector-icons'

import { Container } from './style'

import Home from './pages/Home';
import Login from './pages/Login';
import NovaSolicitacao from './pages/NovaSolicitacao';
import Sobre from './pages/Sobre';
import ButtonNew from './components/ButtonNew';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (""
        /*
        <NavigationContainer>
            <StatusBar barStyle='light-content' />
            <Tab.Navigator
                tabBarOptions={{
                style: {
                    backgroundColor: "#232323",
                    borderTopColor: 'transparent'
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#fff',
                tabStyle: {
                    paddingTop: 20,

                }
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    ),
                    tabBarLabel: ''
                }}/>
            <Tab.Screen
                name="ButtonNew"
                component={New}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <ButtonNew size={size} color={color} />
                    ),
                    tabBarLabel: ''
                }}>
            </Tab.Screen>
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="login" size={size} color={color} />
                    ),
                    tabBarLabel: ''
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
        */
    )
}
