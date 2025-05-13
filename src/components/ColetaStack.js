import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Coleta from '../screens/Coleta';

const Stack = createStackNavigator();

export default function ColetaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Coleta"
        component={Coleta}
        options={{ 
            headerShown: false
          }}
      />
    </Stack.Navigator>
  );
}
