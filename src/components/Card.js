import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importa a biblioteca de ícones

const Card = ({ nome, setNome, data, setData, errors, setErrors }) => {
  const [showDatePicker, setShowDatePicker] = useState(false); // Controla a exibição do seletor de data

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false); // Fecha o seletor de data
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString('pt-BR'); // Formata a data para o padrão brasileiro
      setData(formattedDate); // Atualiza o estado da data
      setErrors((prev) => ({ ...prev, data: false })); // Remove o erro do campo "Data"
    }
  };

  return (
    <View>
      {/* Campo "Nome" */}
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(text) => {
          setNome(text); // Atualiza o estado do nome
          if (text) setErrors((prev) => ({ ...prev, nome: false })); // Remove o erro do campo "Nome"
        }}
      />
      {errors.nome && <Text style={styles.errorText}>Preencha no nome da pesquisa</Text>} {/* Exibe erro se o campo "Nome" estiver vazio */}

      {/* Campo "Data" */}
      <Text style={styles.label}>Data</Text>
      <View style={styles.dateInputContainer}>
        <TextInput
          style={[styles.dateInput]}
          value={data}
          keyboardType="numeric"
          onChangeText={(text) => {
            const formattedText = text
              .replace(/\D/g, '') // Remove caracteres não numéricos
              .replace(/(\d{2})(\d)/, '$1/$2') // Adiciona a primeira barra
              .replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3') // Adiciona a segunda barra
              .slice(0, 10); // Limita o texto a 10 caracteres
            setData(formattedText); // Atualiza o estado da data
            if (formattedText) setErrors((prev) => ({ ...prev, data: false })); // Remove o erro do campo "Data"
          }}
        />
        <TouchableOpacity
          style={styles.datePickerIcon}
          onPress={() => setShowDatePicker(true)} // Abre o seletor de data
        >
          <Icon name="calendar-month" size={24} color="#808080" /> {/* Ícone de calendário */}
        </TouchableOpacity>
      </View>
      {errors.data && <Text style={styles.errorText}>Preencha a Data</Text>} {/* Exibe erro se o campo "Data" estiver vazio */}
      {showDatePicker && (
        <DateTimePicker
          value={data ? new Date(data.split('/').reverse().join('-')) : new Date()} // Converte a data para o formato Date
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'} // Define o estilo do seletor de data
          onChange={handleDateChange} // Chama a função ao selecionar uma data
        />
      )}

      {/* Botão para selecionar imagem */}
      <Text style={styles.label}>Imagem</Text>
      <TouchableOpacity style={styles.imagePicker}>
        <Text style={styles.imagePickerText}>Câmera/Galeria de imagens</Text> {/* Texto do botão */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16, // Tamanho da fonte do rótulo
    color: '#FFFFFF', // Cor do texto
    fontFamily: 'AveriaLibre-Regular', // Fonte personalizada
    paddingHorizontal: 20, // Espaçamento horizontal
  },
  input: {
    backgroundColor: '#FFFFFF', // Cor de fundo do campo de entrada
    padding: 10, // Espaçamento interno
    marginBottom: 5, // Espaçamento inferior
    marginHorizontal: 20, // Espaçamento horizontal
  },
  dateInputContainer: {
    flexDirection: 'row', // Alinha o input e o ícone na mesma linha
    alignItems: 'center', // Centraliza verticalmente
    marginHorizontal: 20, // Espaçamento horizontal
    marginBottom: 5, // Espaçamento inferior
    backgroundColor: '#FFFFFF', // Cor de fundo
  },
  dateInput: {
    flex: 1, // Faz o input ocupar o espaço restante
    paddingVertical: 10, // Espaçamento vertical
    fontSize: 16, // Tamanho da fonte
    color: '#000000', // Cor do texto
    borderWidth: 0, // Remove borda interna do input
  },
  datePickerIcon: {
    marginLeft: 10, // Espaçamento entre o input e o ícone
  },
  errorText: {
    color: '#FF6347', // Cor do texto de erro
    fontSize: 12, // Tamanho da fonte
    marginBottom: 15, // Espaçamento inferior
    marginHorizontal: 20, // Espaçamento horizontal
  },
  imagePicker: {
    backgroundColor: '#FFFFFF', // Cor de fundo do botão
    padding: 20, // Espaçamento interno
    alignItems: 'center', // Centraliza o texto
    marginBottom: 20, // Espaçamento inferior
    marginHorizontal: 20, // Espaçamento horizontal
  },
  imagePickerText: {
    color: '#808080', // Cor do texto do botão
  },
});

export default Card; // Exporta o componente