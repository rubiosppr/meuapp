import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NovaPesquisa from '../screens/NovaPesquisa';

const Stack = createStackNavigator();

export default function NovaPesquisaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NovaPesquisa"
        component={NovaPesquisa}
        options={{
            headerStyle: {
              backgroundColor: '#2B1D62', // Cor roxa do header
            },
            headerTitle: 'Nova Pesquisa',
            headerTintColor: '#fff', // Cor do texto no header
            headerTitleStyle:{
              fontFamily:'AveriaLibre-Regular',
              fontSize: 36
            }}}
      />
    </Stack.Navigator>
  );
}
