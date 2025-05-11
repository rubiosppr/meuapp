// Importa os módulos necessários do React e React Native
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Card from '../components/Card'; // Importa o componente Card

// Define o componente principal da tela
function NovaPesquisa() {
  // Declara os estados para armazenar os valores dos campos e os erros de validação
  const [nome, setNome] = useState(''); // Estado para o campo "Nome"
  const [data, setData] = useState(''); // Estado para o campo "Data"
  const [imagem, setImagem] = useState(''); // Estado para o campo "Imagem"
  const [errors, setErrors] = useState({ nome: false, data: false }); // Estado para rastrear erros de validação

  // Função chamada ao pressionar o botão "CADASTRAR"
  const handleCadastrar = () => {
    // Verifica se os campos estão preenchidos e atualiza os erros
    const newErrors = {
      nome: !nome, // Define erro se o campo "Nome" estiver vazio
      data: !data, // Define erro se o campo "Data" estiver vazio
    };
    setErrors(newErrors); // Atualiza o estado de erros

    // Verifica se há algum erro
    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      // Se não houver erros, exibe uma mensagem de sucesso no console
      console.log('Cadastro realizado com sucesso!');
    }
  };

  // Retorna o layout da tela
  return (
    <View style={styles.container}>
      {/* Seção do meio com o componente Card */}
      <View style={styles.middleSection}>
        <Card
          nome={nome}
          setNome={setNome}
          data={data}
          setData={setData}
          errors={errors}
          setErrors={setErrors}
        />
      </View>

      {/* Seção inferior com o botão "CADASTRAR" */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    backgroundColor: '#372775', // Cor de fundo
  },
  topSection: {
    flex: 1, // Ocupa 25% da tela
    justifyContent: 'center', // Alinha o conteúdo ao final verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  middleSection: {
    flex: 3, // Ocupa 50% da tela
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
  },
  bottomSection: {
    flex: 2, // Ocupa 25% da tela
    justifyContent: 'flex-start', // Alinha o conteúdo ao início verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  title: {
    fontSize: 24, // Tamanho da fonte
    color: '#FFFFFF', // Cor do texto
    fontFamily: 'AveriaLibre-Bold', // Fonte personalizada
  },
  button: {
    backgroundColor: '#37BD6D', // Cor de fundo
    padding: 15, // Espaçamento interno
    alignItems: 'center', // Centraliza o texto horizontalmente
    width: '80%', // Largura do botão
  },
  buttonText: {
    color: '#FFFFFF', // Cor do texto
    fontSize: 16, // Tamanho da fonte
    fontFamily: 'AveriaLibre-Bold', // Fonte personalizada
  },
});

// Exporta o componente para ser usado em outras partes do aplicativo
export default NovaPesquisa;