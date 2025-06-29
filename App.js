import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

import Login from "./src/screens/Login";
import DrawerNavigator from "./src/components/DrawerNavigator"
import NovaConta from "./src/screens/NovaConta";
import RecuperarSenha from "./src/screens/RecuperarSenha";
import PopUp from './src/screens/PopUp';
import ModificarPesquisa from './src/screens/ModificarPesquisa';
import AgradecimentoParticipacao from './src/screens/AgradecimentoParticipacao';
import AcoesPesquisa from './src/screens/AcoesPesquisa';
import NovaPesquisa from './src/screens/NovaPesquisa';
import Coleta from './src/screens/Coleta';
import Home from './src/screens/Home';
import Relatorio from './src/screens/Relatorio';
import { Provider } from "react-redux";
import { store } from "./redux/store";



const Stack = createStackNavigator();
const App = () => {
  return(
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerStyle: { backgroundColor: '#2B1D62' }, 
          headerTintColor: '#fff',
          headerTitle: 'Nova Conta',
          headerShown: true}}
          name="NovaConta"
          component={NovaConta}
        />
        <Stack.Screen
          options={{ headerStyle: { backgroundColor: '#2B1D62' }, 
          headerTintColor: '#fff',
          headerTitle: 'Recuperação de Senha',
          headerShown: true}}
          name="RecuperarSenha"
          component={RecuperarSenha}
        />
        <Stack.Screen options={{headerShown: false}}
          name="DrawerNavigator"
          component={DrawerNavigator}
        />
        <Stack.Screen options={{ headerShown: false }}
          name="Coleta"
          component={Coleta}
        />
         <Stack.Screen options={{ headerShown: false}}
          name="AgradecimentoParticipacao"
          component={AgradecimentoParticipacao}
        />
        <Stack.Screen 
          name="PopUp"
          component={PopUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen options={{ headerStyle: { backgroundColor: '#2B1D62' }, 
          headerTintColor: '#fff',
          headerTitle: 'Modificar Pesquisa',
          headerShown: true}}
          name="ModificarPesquisa"
          component={ModificarPesquisa}
        />
        <Stack.Screen options={{ headerStyle: { backgroundColor: '#2B1D62' },
            headerTintColor: '#fff',
            headerTitle: 'Nova Pesquisa',
            headerShown: true}}
          name="NovaPesquisa"
          component={NovaPesquisa}
        />
        <Stack.Screen options={{ headerStyle: { backgroundColor: '#2B1D62' },
            headerTintColor: '#fff',
            headerTitle: 'Carnaval',
            headerShown: true}}
          name="AcoesPesquisa"
          component={AcoesPesquisa}
        />
        <Stack.Screen options={{ headerStyle: { backgroundColor: '#2B1D62' },
            headerTintColor: '#fff',
            headerTitle: '',
            headerShown: true}}
          name="Home"
          component={Home}
        />
        <Stack.Screen 
          options={{
            headerStyle: { backgroundColor: '#2B1D62' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontFamily: 'AveriaLibre-Regular', fontSize: 36 },
            headerTitle: 'Relatório',
            headerShown: true
          }}
          name="Relatorio" 
          component={Relatorio}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}


export default App
