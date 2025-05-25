import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PopUp = ({ navigation }) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <Text style={styles.text}>Tem certeza de apagar essa pesquisa?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonRed} onPress={() => navigation.navigate('DrawerNavigator', { screen: 'Pesquisas' })}>
            <Text style={styles.buttonText}>SIM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBlue} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>CANCELAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 300,
    backgroundColor: '#372775',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonRed: {
    backgroundColor: '#FD7979',
    padding: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonBlue: {
    backgroundColor: '#419ED7',
    padding: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
  },
});

export default PopUp;
