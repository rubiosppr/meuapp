import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importa os ícones da biblioteca MaterialIcons

const Coleta = () => {
  return (
    <View style={styles.container}> {/* Container principal da tela */}
      <Text style={styles.title}>O que você achou do Carnaval 2024?</Text> {/* Título da tela */}
      <View style={styles.iconsContainer}> {/* Container para os ícones */}
        <TouchableOpacity style={styles.iconWrapper}> {/* Botão para "Péssimo" */}
          <Icon name="sentiment-very-dissatisfied" size={50} color="#FF0000" /> {/* Ícone vermelho */}
          <Text style={styles.iconText}>Péssimo</Text> {/* Texto abaixo do ícone */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}> {/* Botão para "Ruim" */}
          <Icon name="sentiment-dissatisfied" size={50} color="#FF4500" /> {/* Ícone laranja */}
          <Text style={styles.iconText}>Ruim</Text> {/* Texto abaixo do ícone */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}> {/* Botão para "Neutro" */}
          <Icon name="sentiment-neutral" size={50} color="#FFD700" /> {/* Ícone amarelo */}
          <Text style={styles.iconText}>Neutro</Text> {/* Texto abaixo do ícone */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}> {/* Botão para "Bom" */}
          <Icon name="sentiment-satisfied" size={50} color="#32CD32" /> {/* Ícone verde claro */}
          <Text style={styles.iconText}>Bom</Text> {/* Texto abaixo do ícone */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}> {/* Botão para "Excelente" */}
          <Icon name="sentiment-very-satisfied" size={50} color="#008000" /> {/* Ícone verde escuro */}
          <Text style={styles.iconText}>Excelente</Text> {/* Texto abaixo do ícone */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    backgroundColor: '#372775', // Cor de fundo roxa
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    padding: 16, // Espaçamento interno
  },
  title: {
    color: '#FFFFFF', // Cor do texto branca
    fontSize: 20, // Tamanho da fonte
    marginBottom: 30, // Espaçamento inferior
    textAlign: 'center', // Centraliza o texto
    fontFamily: 'AveriaLibre-Regular', // Fonte personalizada
  },
  iconsContainer: {
    flexDirection: 'row', // Alinha os ícones horizontalmente
    justifyContent: 'space-between', // Espaçamento uniforme entre os ícones
    width: '100%', // Ocupa toda a largura disponível
  },
  iconWrapper: {
    alignItems: 'center', // Centraliza os ícones e textos
    width: '20%', // Cada ícone ocupa 20% da largura
  },
  iconText: {
    color: '#FFFFFF', // Cor do texto branca
    fontSize: 12, // Tamanho da fonte
    marginTop: 8, // Espaçamento superior
    textAlign: 'center', // Centraliza o texto
    fontFamily: 'AveriaLibre-Regular', // Fonte personalizada
  },
});

export default Coleta; // Exporta o componente