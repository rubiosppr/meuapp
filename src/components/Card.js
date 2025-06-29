import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import storage from '@react-native-firebase/storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid'; 

const Card = ({ nome, setNome, data, setData, errors, setErrors }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async (source) => {
    const options = {
      mediaType: 'photo',
      saveToPhotos: true,
    };

    const callback = async (response) => {
      if (response.didCancel) {
        console.log('Seleção cancelada');
      } else if (response.errorCode) {
        console.error('Erro:', response.errorMessage);
      } else {
        const asset = response.assets[0];
        const { uri } = asset;
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        const imageName = uuid.v4();

        const reference = storage().ref(`/pesquisas/${imageName}.jpg`);

        try {
          await reference.putFile(uploadUri);
          const downloadUrl = await reference.getDownloadURL();

          Alert.alert('Imagem enviada com sucesso!');
          console.log('URL da imagem:', downloadUrl);

          setSelectedImage(downloadUrl);
        } catch (error) {
          console.error('Erro ao enviar imagem:', error);
          Alert.alert('Erro ao enviar imagem');
        }
      }
    };


    if (source === 'camera') {
      launchCamera(options, callback);
    } else {
      launchImageLibrary(options, callback);
    }
  };

  const handleImagePickAndUpload = () => {
    Alert.alert(
      'Selecionar imagem',
      'Escolha de onde deseja obter a imagem',
      [
        {
          text: 'Câmera',
          onPress: () => pickImage('camera'),
        },
        {
          text: 'Galeria',
          onPress: () => pickImage('gallery'),
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };


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
        <TouchableOpacity style={styles.datePickerIcon} onPress={() => setShowDatePicker(true)}>
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
      <TouchableOpacity style={styles.imagePicker} onPress={handleImagePickAndUpload}>
        <Text style={styles.imagePickerText}>Câmera/Galeria de imagens</Text>
      </TouchableOpacity>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200, alignSelf: 'center', marginTop: 10 }}
          resizeMode="contain"
        />
      )}
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