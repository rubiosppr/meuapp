import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import AcoesPesquisa from '../screens/AcoesPesquisa';

const Stack = createStackNavigator();

export default function AcoesPesquisaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AcoesPesquisa"
        component={AcoesPesquisa}
        options={{
            headerStyle: {
              backgroundColor: '#2B1D62',
            },
            headerTitle: 'Carnaval',
            headerTintColor: '#fff',
            headerTitleStyle:{
              fontFamily:'AveriaLibre-Regular',
              fontSize: 36
            }}}
      />
    </Stack.Navigator>
  );
}
