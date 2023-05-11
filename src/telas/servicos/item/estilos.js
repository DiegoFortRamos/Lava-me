import { StyleSheet } from 'react-native';
import { cores } from '../../../estilos';


export default StyleSheet.create({
  informacao: {
    padding: 10,
    backgroundColor : cores.azulClaro,
    marginBottom : 10,
    marginTop : 20,
    width : 320,
    borderRadius : 18,
    marginLeft : 33, 
  },
  nome: {
    color: cores.claro,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign : "center",
    marginBottom : 10
    
  },
  shadowProp: {  
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,  
  },  
  
  preco: {
    color: cores.claro,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  carrinho: {
    paddingHorizontal: 24,
    paddingBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop : 10
  },
  valor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  descricao: {
    color: cores.azulClaro,
    fontSize: 16,
    marginRight: 8,
    textAlign : "center",
    marginBottom: 10,

  }
});