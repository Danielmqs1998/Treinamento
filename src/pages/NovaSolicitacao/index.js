import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import globais from "../../globais";

function NovaSolicitacao(){
    const usuario = globais.usuario;
    console.log(usuario.id);
    
    const [desc, setDesc] = useState("");
    const [titulo, setTitulo] = useState("");


    async function solicitar(){
        if(desc != null && titulo != null)
        {
            openRealm().then((realm)=>
            {
                console.log("b");
                usuario.mongoClient("mongodb-atlas").db("Usuarios").collection("Solicitacoes").insertOne({"_id": 1,"_iduser": usuario.id, "titulo": titulo, "descricao": desc,"particao":"particao"});
                
            })
        }
    }
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
  
          console.log(`Logged in with the user: ${usuario}`);
          const config = {
            //schema:[solicitacao],
            sync: {
                user: usuario,
                partitionValue: "particao",
            },
          };
          realm = await Realm.open(config);
     
        } catch (error) {
            throw `Error opening realm: ${JSON.stringify(error,null,2)}`;
        }
        return realm;
    }
    return(
        <View style={styles.container}>
            <Text>Título:</Text>
            <TextInput onChangeText={titulo => setTitulo(titulo)}/>
            <Text>Descricao:</Text>
            <TextInput onChangeText={desc => setDesc(desc)}/>
            <TouchableOpacity onPress={solicitar}><Text>Enviar</Text></TouchableOpacity>
        </View>
    )
}

export default NovaSolicitacao;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#afa',
      alignItems: 'center',
      justifyContent: 'center',
    }
})