import React,{useState} from "react";
import { Text,TextInput,View } from "react-native";
import estilos from "./estilos";
import CampoInteiro from "../../../componentes/campoInteiro";
import Botao from "../../../componentes/botao";

export default function Item({nome,preco,descricao}){

    

    return<>
    <View style={estilos.informacao}>
        <Text style={estilos.nome} >{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>

     <View style={estilos.carrinho}>
        <Botao  valor="Adicionar" acao={() =>{} } />
        <Text style={estilos.preco}>{preco}</Text>
    </View>
    <View style={estilos.divisor}/>
        
    </View>
   
    </>
}