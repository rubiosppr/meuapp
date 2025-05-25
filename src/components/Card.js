import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = ({ nome, setNome, data, setData, errors, setErrors }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString('pt-BR');
      setData(formattedDate);
      setErrors((prev) => ({ ...prev, data: false }));
    }
  };

  return (
    <View>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(text) => {
          setNome(text);
          if (text) setErrors((prev) => ({ ...prev, nome: false }));
        }}
      />
      {errors.nome && <Text style={styles.errorText}>Preencha no nome da pesquisa</Text>}
      <Text style={styles.label}>Data</Text>
      <View style={styles.dateInputContainer}>
        <TextInput
          style={[styles.dateInput]}
          value={data}
          keyboardType="numeric"
          onChangeText={(text) => {
            const formattedText = text
              .replace(/\D/g, '')
              .replace(/(\d{2})(\d)/, '$1/$2')
              .replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3')
              .slice(0, 10);
            setData(formattedText);
            if (formattedText) setErrors((prev) => ({ ...prev, data: false }));
          }}
        />
        <TouchableOpacity
          style={styles.datePickerIcon}
          onPress={() => setShowDatePicker(true)}
        >
          <Icon name="calendar-month" size={24} color="#808080" />
        </TouchableOpacity>
      </View>
      {errors.data && <Text style={styles.errorText}>Preencha a Data</Text>}
      {showDatePicker && (
        <DateTimePicker
          value={data ? new Date(data.split('/').reverse().join('-')) : new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}
      <Text style={styles.label}>Imagem</Text>
      <TouchableOpacity style={styles.imagePicker}>
        <Text style={styles.imagePickerText}>Câmera/Galeria de imagens</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 5,
    marginHorizontal: 20,
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
  },
  dateInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: '#000000',
    borderWidth: 0,
  },
  datePickerIcon: {
    marginLeft: 10,
  },
  errorText: {
    color: '#FF6347',
    fontSize: 12,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  imagePicker: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  imagePickerText: {
    color: '#808080',
  },
});

export default Card;