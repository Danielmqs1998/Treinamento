import React, {useRef,useState} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Realm from 'realm';


export default function Registrar({navigation}){
    const realmRef = useRef(null);

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
        
    
    
    const [cpf,setCpf] = useState(0);
    const [user, setUser] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
     );
     const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    
    async function openRealm() {
        
        let realm;
        try {

          const usuario = {
            name: 'Users',
            properties:
            {
               _id: 'string',
               nome: 'string',
               telefone: 'string',
               cpf: 'int',
               email: 'string'
            },
            primaryKey: '_id'
          };
          // ...
          console.log(`Logged in with the user: ${user}`);
          const config = {
            schema: [usuario],
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
     
    async function login(email,senha)
    {   
        let user;
        
        console.log("2")

        try{
            const credentials = Realm.Credentials.emailPassword("danielmqs1998@gmail.com","Abc123");
            user = await app.logIn(credentials);
            console.log(user)
            setUser(user);

        } 
        catch (error) {                    
            throw `Error logging in anonymously: ${JSON.stringify(error,null,2)}`;               
        }
        
    }
    async function criarUsuario({navigation}) {
        
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
            await app.emailPasswordAuth.registerUser(email,senha).then(()=>
            {
                            
            
    // pass in the appConfig variable that you created earlier
                try{
                    login();
                    console.log("2")

                } 
                catch (error) {                    
                    throw `Error logging in anonymously: ${JSON.stringify(error,null,2)}`;               
                }
                finally{
                    openRealm().then((realm)=>
                    {
                        if(realm.objects("Users").includes(user.id) != undefined)
                        {
                            realm.write(()=>
                            {
                                realm.create("Users", 
                                {"_id":users.id,
                                  "nome":nome,
                                  "telefone":telefone,
                                  "email":email,
                                  "cpf":cpf
                                });
                            }) 
                        }
                        app.currentUser.logOut();
                        navigation.navigate("Login");
                    });
                }
            }).catch((erro)=>
            {
                if(erro.code==49)
                {
                    login(email,senha);
                    openRealm().then((realm)=>
                    {
                        console.log("aa"+user.id)
                        if(realm.objectForPrimaryKey("Users", user.id) != undefined)
                        {
                            realm.write(()=>
                            {
                                realm.create("Users", {"_id":user.id,"nome":nome,"telefone":telefone,"email":email,"cpf":cpf});
                            }) 
                        }
                        app.currentUser.logOut();
                        navigation.navigate("Login");
                    });
                }
            });
            // create an anonymous credential    
        }
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
            <Text style={{textAlign:"center", marginTop: 1}}>Nome:</Text>
            <TextInput style={{width: 120, backgroundColor:"white", borderRadius:5}} onChangeText={nome => setNome(nome)}/>
            <Text style={{textAlign:"center"}}>Email:</Text>
            <TextInput style={{width: 120, backgroundColor:"white", borderRadius:5}} onChangeText={email => setEmail(email)}/>
            <Text style={{textAlign:"center", marginTop: 1}}>CPF:</Text>
            <TextInput style={{width: 120, backgroundColor:"white", borderRadius:5}} onChangeText={cpf => setCpf(cpf)}/>
            <Text style={{textAlign:"center"}}>Telefone:</Text>
            <TextInput style={{width: 120, backgroundColor:"white", borderRadius:5}} onChangeText={tel => setTel(tel)}/>
            <Text style={{textAlign:"center"}}>Senha:</Text>
            <TextInput style={{width: 120, backgroundColor:"white", borderRadius:5}} onChangeText={senha => setSenha(senha)} secureTextEntry/>
            <TouchableOpacity style={styles.botao} onPress={()=> criarUsuario()}><Text>Criar Usuário</Text></TouchableOpacity>

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
        padding: 5
    }
})