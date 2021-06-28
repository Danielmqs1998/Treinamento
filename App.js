import { StatusBar} from 'expo-status-bar';
import React from 'react';
import Routes from "./src/routes";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Registrar from './src/pages/Registrar';
import NovaSolicitacao from './src/pages/NovaSolicitacao';
import Sobre from './src/pages/Sobre';
import Solicitacoes from './src/pages/Solicitacoes';
import { TouchableOpacity} from 'react-native';

const Stack = createStackNavigator();

export default function App() {

  return (
    
    <NavigationContainer>
      <StatusBar barStyle='light-content' />
      <Stack.Navigator initialRouteName="Login"> 
        <Stack.Screen name="Home" component={Home} options={{
          headerTitle: "teste",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => alert('This is a button!')}
              
              color="#fff"
            ></TouchableOpacity>
          ),
        }} />
        <Stack.Screen name="Registrar" component={Registrar} />
        <Stack.Screen name="NovaSolicitacao" component={NovaSolicitacao} />
        <Stack.Screen name="Solicitacoes" component={Solicitacoes} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
    
  );
}
