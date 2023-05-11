import React from "react";
import estilos from "./estilos";
import {TouchableOpacity,Text} from 'react-native';

export default function Botao({valor,acao}){
    return <TouchableOpacity onPress={acao} style={estilos.botao}>
        <Text style={estilos.valor} >{valor}</Text>
    </TouchableOpacity>
}