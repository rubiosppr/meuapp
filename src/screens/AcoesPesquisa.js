import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AcoesPesquisa = () => {
  return (
    <View style={styles.container}> {/* Container principal da tela */}
      {/* <Text style={styles.title}>Carnaval</Text> */} {/* Título comentado */}
      <View style={styles.buttonContainer}> {/* Container para os botões */}
        <TouchableOpacity style={styles.button}> {/* Botão "Modificar" */}
          <Icon name="edit-document" size={40} color="#FFFFFF" /> {/* Ícone */}
          <Text style={styles.buttonText}>Modificar</Text> {/* Texto do botão */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}> {/* Botão "Coletar Dados" */}
          <Icon name="library-add-check" size={40} color="#FFFFFF" /> {/* Ícone */}
          <Text style={styles.buttonText}>Coletar</Text> {/* Texto do botão */}
          <Text style={styles.buttonText2}>Dados</Text> {/* Texto adicional */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}> {/* Botão "Relatório" */}
          <Icon name="donut-large" size={40} color="#FFFFFF" /> {/* Ícone */}
          <Text style={styles.buttonText}>Relatório</Text> {/* Texto do botão */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    backgroundColor: '#372775', // Cor de fundo roxa
    padding: 16, // Espaçamento interno
    justifyContent: 'center', // Centraliza verticalmente
  },
  title: {
    color: '#FFFFFF', // Cor do texto branca
    fontSize: 24, // Tamanho da fonte
    fontWeight: 'bold', // Texto em negrito
    marginBottom: 20, // Espaçamento inferior
  },
  buttonContainer: {
    flexDirection: 'row', // Alinha os botões horizontalmente
    justifyContent: 'space-between', // Espaçamento uniforme entre os botões
  },
  button: {
    alignItems: 'center', // Centraliza o conteúdo do botão
    backgroundColor: '#2B1D62', // Cor de fundo do botão
    padding: 16, // Espaçamento interno
    width: '30%', // Largura do botão
    justifyContent: 'center', // Centraliza verticalmente
  },
  buttonText: {
    color: '#FFFFFF', // Cor do texto branca
    fontSize: 12, // Tamanho da fonte
    marginTop: 8, // Espaçamento superior
    fontFamily: 'AveriaLibre-Regular', // Fonte personalizada
  },
  buttonText2: {
    color: '#FFFFFF', // Cor do texto branca
    fontSize: 12, // Tamanho da fonte
    fontFamily: 'AveriaLibre-Regular', // Fonte personalizada
  },
});

export default AcoesPesquisa; // Exporta o componente