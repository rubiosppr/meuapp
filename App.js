import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AcoesPesquisa from "./src/screens/AcoesPesquisa";
import Coleta from "./src/screens/Coleta";
import NovaPesquisa from "./src/screens/NovaPesquisa";

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Nova Pesquisa" 
          component={NovaPesquisa} 
          options={{
            headerStyle: {
              backgroundColor: '#2B1D62', // Cor roxa do header
            },
            headerTintColor: '#fff', // Cor do texto no header
            headerTitleStyle:{
              fontFamily:'AveriaLibre-Regular'
            }
          }}
        />
        <Stack.Screen 
          name="Carnaval" 
          component={AcoesPesquisa} 
          options={{
            headerStyle: {
              backgroundColor: '#2B1D62', // Cor roxa do header
            },
            headerTintColor: '#fff', // Cor do texto no header
            headerTitleStyle:{
              fontFamily:'AveriaLibre-Regular'
            }
          }}
        />
        <Stack.Screen 
          name="Coleta" 
          component={Coleta} 
          options={{
            headerStyle: {
              backgroundColor: '#2B1D62', // Cor roxa do header
            },
            headerTintColor: '#fff', // Cor do texto no header
            headerTitleStyle:{
              fontFamily:'AveriaLibre-Regular'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App