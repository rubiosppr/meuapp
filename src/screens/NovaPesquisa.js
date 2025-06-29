import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';
import db from '../config/firestore';
import { collection, addDoc } from 'firebase/firestore';


function NovaPesquisa() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [imagem, setImagem] = useState('');
  const [errors, setErrors] = useState({ nome: false, data: false });


  const handleCadastrar = async () => {
    const newErrors = {
      nome: !nome,
      data: !data,
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      try {
        await addDoc(collection(db, 'pesquisas'), {
          nome,
          data,
          imagem: imagem || '',
        });
        navigation.navigate('DrawerNavigator', { screen: 'Pesquisas' });
      } catch (error) {
        console.error('Erro ao cadastrar pesquisa:', error);
      }
    }
  };


  return (
    <View style={styles.container}>
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

      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleSection: {
    flex: 3,
    justifyContent: 'center',
  },
  bottomSection: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Bold',
  },
  button: {
    backgroundColor: '#37BD6D',
    padding: 15,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'AveriaLibre-Bold',
  },
});


export default NovaPesquisa;