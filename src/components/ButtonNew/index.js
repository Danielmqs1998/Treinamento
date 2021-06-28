import React from 'react';
import {Entypo} from '@expo/vector-icons'
import {Container} from './style'

export default function ButtonNew ({size, color}){
    return(
            <Container>
                <Entypo 
                    name="plus" 
                    size={size} 
                    color={color}
                />
            </Container>
    )
}
