import React from "react";
import { TextInput } from "react-native";
import estilos from "./estilos";

export default function CampoInteiro({valor,acao}){
    const numeroString = String(valor)

    return <TextInput
        style={[estilos.campo]}
        keyboardType="number-pad"
        selectTextOnFocus
        onChangeText={(novoValor) => {acao(novoValor)}}
        value = {numeroString}
    
    />
}