import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import AcoesPesquisa from '../screens/AcoesPesquisa';
import NovaPesquisa from '../screens/NovaPesquisa';
import Coleta from '../screens/Coleta';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <View style={styles.header}>
        <Text style={styles.email}>usuario@dominio.com</Text>
        <View style={styles.divider} />
      </View>
      <DrawerItemList {...props} />
      <View style={styles.footer}>
        <DrawerItem
          label="Sair"
          icon={() => <Icon name="logout" size={20} color="#fff" />}
          onPress={() => navigation.navigate('Login')}
          labelStyle={styles.label}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2B1D62',
        },
        drawerStyle: {
          backgroundColor: '#372775',
        },
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
        drawerLabelStyle: {
          fontFamily: 'AveriaLibre-Regular',
          fontSize: 18,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'AveriaLibre-Regular',
          fontSize: 20
        }
      }}
    >
      <Drawer.Screen
            name="Home"
            component={Home}
            options={({ route }) => ({
              headerTitle: route.name
            })}
          />
      <Drawer.Screen
        name="Pesquisas"
        component={AcoesPesquisa}
        options={({ route }) => ({
          headerTitle: route.name
        })}
      />
      <Drawer.Screen
        name="Nova Pesquisa"
        component={NovaPesquisa}
        options={({ route }) => ({
          headerTitle: route.name
        })}
      />
      <Drawer.Screen
        name="Coleta"
        component={Coleta}
        options={({ route }) => ({
          headerTitle: route.name
        })}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 0,
  },
  header: {
    backgroundColor: '#372775',
    padding: 16,
  },
  email: {
    color: '#fff',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    marginTop: 40,
    marginBottom: 18,
  },
  divider: {
    height: 1,
    backgroundColor: '#fff',
  },
  footer: {
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: '#fff',
    padding: 8,
  },
  label: {
    color: '#fff',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
  },
});

export default DrawerNavigator;
