import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import { question } from '../../_shared/constants'
import { createStackNavigator } from '@react-navigation/stack';
import Realm from "realm";
import { BackHandler } from 'react-native';
import {Usuario} from "../../pages/Login/index";
import globais from "../../globais";

const Stack = createStackNavigator();


export default function Home({navigation}) {

    const user = globais.usuario;
    console.log(user.id)
    function handleBackButtonClick() {
        console.log("teste");
      return true;
    }
  
    useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
      };
    }, []);

    return (
            <View style={styles.container}>
            <View>
                <Text>Bem-vindo! </Text>
            </View>
            <TouchableOpacity style={styles.item} onPress={()=>  navigation.navigate("NovaSolicitacao")}>
                <Text> Nova solicitação </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate("Solicitacoes")}>
                <Text> Solicitações </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate("Sobre")}>
                <Text> Solicitações </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
        top: 60,

    },
    content: {
        
    },

    item: {
        width: 200,
        height: 120,
        margin: 12,
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})