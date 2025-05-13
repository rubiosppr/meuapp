import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import ColetaStack from "./ColetaStack.js";
import Home from "../screens/Home.js";
import AcoesPesquisaStack from "./AcoesPesquisaStack.js";
import NovaPesquisaStack from "./NovaPesquisaStack.js";


const Drawer = createDrawerNavigator();
const DrawerNavigator = () =>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
            headerStyle: {
              backgroundColor: '#2B1D62', // Cor roxa do header
            },
            title: 'Home',
            headerTitle: '',
            headerTintColor: '#fff', // Cor do texto no header
            headerTitleStyle:{
              fontFamily:'AveriaLibre-Regular',
              fontSize: 36
            }
          }}
      />
      <Drawer.Screen
        name="Coleta"
        component={ColetaStack}
        options={{headerShown: false, title: 'Coleta'}}
      />
      <Drawer.Screen
        name="AcoesPesquisaStack"
        component={AcoesPesquisaStack}
        options={{headerShown: false, title: 'Açoes Pesquisa'}}/*Nome placeholder*/
      />
      <Drawer.Screen
        name="NovaPesquisaStack"
        component={NovaPesquisaStack}
        options={{headerShown: false, title: 'Nova Pesquisa'}}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;