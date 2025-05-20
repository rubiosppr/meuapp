import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

import Login from "./src/screens/Login";
import DrawerNavigator from "./src/components/DrawerNavigator"
import NovaConta from "./src/screens/NovaConta";
import PopUp from './src/screens/PopUp';
import ModificarPesquisa from './src/screens/ModificarPesquisa';

const Stack = createStackNavigator();
const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
        options={{
            headerStyle: {
              backgroundColor: '#2B1D62', // Cor roxa do header
            },
            title: 'NovaConta',
            headerTitle: 'Nova Conta',
            headerTintColor: '#fff', // Cor do texto no header
            headerTitleStyle:{
              fontFamily:'AveriaLibre-Regular',
              fontSize: 36
            }
          }}
          name="NovaConta"
          component={NovaConta}
        />
        <Stack.Screen options={{headerShown: false}}
          name="DrawerNavigator"
          component={DrawerNavigator}
        />
        <Stack.Screen 
          name="PopUp"
          component={PopUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen options={{ headerShown: false}}
          name="ModificarPesquisa"
          component={ModificarPesquisa}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App
