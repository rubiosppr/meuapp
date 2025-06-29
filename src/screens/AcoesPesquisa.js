import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';

const AcoesPesquisa = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { pesquisaId } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ModificarPesquisa', { pesquisaId })}>
            <Icon name="edit-document" size={40} color="#FFFFFF" />
            <Text style={styles.buttonText}>Modificar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Coleta', { pesquisaId })}>
            <Icon name="library-add-check" size={40} color="#FFFFFF" />
            <Text style={styles.buttonText}>Coletar</Text>
            <Text style={styles.buttonText2}>Dados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Relatorio', { pesquisaId })}>
            <Icon name="donut-large" size={40} color="#FFFFFF" />
            <Text style={styles.buttonText}>Relatório</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  drawerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    alignSelf: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2B1D62',
    padding: 16,
    width: '30%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 8,
    fontFamily: 'AveriaLibre-Regular',
  },
  buttonText2: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default AcoesPesquisa;
