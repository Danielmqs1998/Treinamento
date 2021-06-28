import React, {useState} from 'react'
import {View, Text} from 'react-native';
import globais from "../../globais";
import Realm from 'realm';

function Solicitacoes(){
    let realm;
    const usuario = globais.usuario;
 
    openRealm().then((realm)=>
    {
        
        console.log("a");
        

      
        
            
        
        
        
        
    })
    
   

    async function openRealm() {
        
        
        try {
            
          console.log(usuario.id)
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
            schema: [solicitacao],
            sync: {
                user: usuario,
                partitionValue: "particao",
            },
          };
          realm = await Realm.open(config);
          console.log(realm.schema);
          console.log(realm.objectForPrimaryKey("Solicitacoes", 1)._id)
     
        } catch (error) {
            throw `Error opening realm: ${JSON.stringify(error,null,2)}`;
        }
        
        
    }
    return(
        <View>
           
        </View>
    )
}

export default Solicitacoes;
