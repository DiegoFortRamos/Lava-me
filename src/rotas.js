import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Servicos from './telas/servicos';
import Carrinho from './telas/carrinho';
import { cores } from './estilos';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return <NavigationContainer>
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: cores.azulClaro,
        tabBarInactiveTintColor : cores.azulEscuro,
        tabBarLabelStyle : {
          fontWeight : 'bold',
          fontSize : 16,
          lineHeight : 21
        }
    }}>
      <Tab.Screen name="Serviços" component={Servicos} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
    </Tab.Navigator>
  </NavigationContainer>
}