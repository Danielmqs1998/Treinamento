import React, {useRef,useState,useEffect} from 'react'
import {View, Text, StyleSheet, Image,Alert, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import Realm from 'realm';
import globais from "../../globais";
import {ObjectId} from 'bson';


function getRealmApp(){

      
    const appId = 'appfiscal-wadge'; // Set Realm app ID here.
    const appConfig = {
      id: appId,
      timeout: 10000,
    };
   const app = new Realm.App(appConfig);
   return app;
   
}
let app = getRealmApp();
let usuario;
// Returns the shared instance of the Realm app.
export {usuario};


export default function Login({navigation}){
    const realmRef = useRef(null);
    const [user, setUser] = useState('');

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
     );
     const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    
    async function openRealm() {
        
        let realm;
        try {

          const solicitacao = {
            name: 'Solicitacoes',
            properties:
            {
               _id: 'int',
               _iduser: 'string',
               titulo: 'string',
               descricao: 'string',
               
            },
            primaryKey: '_id'
          };
          // ...
          console.log(`Logged in with the user: ${user}`);
          const config = {
            schema: [solicitacao],
            sync: {
                user: user,
                partitionValue: "particao",
            },
          };
          realm = await Realm.open(config);
     
        } catch (error) {
            throw `Error opening realm: ${JSON.stringify(error,null,2)}`;
        }
        return realm;
      }
      async function login(){
          let user;
          let app ;

          if(!validPassword.test(senha))
          {
              Alert.alert("Senha deve ter ao menos 6 dígitos, 1 letra maíscula e números!")
          }
          else if(!validEmail.test(email))
          {
              Alert.alert("Senha deve ter ao menos 6 dígitos, 1 letra maíscula e números!")
          }
          else
          {

            console.log("a")
          
          // pass in the appConfig variable that you created earlier
          try {
              app = getRealmApp();
              const credentials = Realm.Credentials.emailPassword(email,senha);
    
              user = await app.logIn(credentials);
             
              setUser(user);
            
              globais.usuario = user;

              navigation.navigate("Home");
              
          } catch (error) {
                  throw `Error logging in anonymously: ${JSON.stringify(error,null,2)}`;
              }
            
            }
    }

    async function criarUsuario(email,senha) {

        app = getRealmApp();
        await app.emailPasswordAuth.registerUser(email,senha)// create an anonymous credential    
        
    }
    return(
        <View style={styles.container}>
            <Text style={{
                fontWeight: 'bold', 
                fontSize: 40, 
                backgroundColor:"green", 
                textAlign:"center", 
                padding: 5, 
                color:"white",
                borderRadius:5}}>FISCAL{"\n"}CIDADÃO</Text>
            <Text style={{
                backgroundColor:"rgb(100,180,10)", 
                marginTop: 8, 
                fontStyle:"italic"}}>Você cuidando de Louveira</Text>
            
            <Text style={{textAlign:"center"}}>Email:</Text>
            <TextInput style={{width: 250, backgroundColor:"white", borderRadius:5}} onChangeText={email => setEmail(email)}/>
            <Text style={{textAlign:"center"}}>Senha:</Text>
            <TextInput style={{width: 250, backgroundColor:"white", borderRadius:5}} onChangeText={senha => setSenha(senha)} secureTextEntry/>
            <TouchableOpacity style={styles.botao} onPress={()=> login(email,senha)}><Text>Entrar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={()=> navigation.navigate("Registrar")}><Text>Registrar Usuário</Text></TouchableOpacity>

        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#afa',
      alignItems: 'center',
      justifyContent: 'center',
    },
    botao:
    {
        borderRadius: 5,
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        width: 150,
        height: 40,
        alignItems: 'center',
    }
})