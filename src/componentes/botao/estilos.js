import { StyleSheet } from 'react-native';
import { cores } from '../../estilos';

export default  StyleSheet.create({
  botao: {
    width:120 ,
    paddingHorizontal: 20,
    backgroundColor : cores.claro,
    borderRadius : 10
  },
  valor: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: cores.azulEscuro
    
  }
});