import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import db from '../config/firestore';
import { doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';


function ModificarPesquisa() {
  const navigation = useNavigation();
  const route = useRoute();
  const { pesquisaId } = route.params || {};
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [errors, setErrors] = useState({ nome: false, data: false });


  React.useEffect(() => {
    if (pesquisaId) {
      const fetchPesquisa = async () => {
        try {
          const docSnap = await getDoc(doc(db, 'pesquisas', pesquisaId));
          if (docSnap.exists()) {
            const pesquisa = docSnap.data();
            setNome(pesquisa.nome);
            setData(pesquisa.data);
          }
        } catch (error) {
          console.error('Erro ao buscar pesquisa:', error);
        }
      };
      fetchPesquisa();
    }
  }, [pesquisaId]);


  const handleEditar = async () => {
    const newErrors = {
      nome: !nome,
      data: !data,
    };
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors && pesquisaId) {
      try {
        await updateDoc(doc(db, 'pesquisas', pesquisaId), {
          nome,
          data,
        });
        navigation.navigate('DrawerNavigator', { screen: 'Pesquisas' });
      } catch (error) {
        console.error('Erro ao editar pesquisa:', error);
      }
    }
  };


  const handleDelete = async () => {
    if (pesquisaId) {
      try {
        await deleteDoc(doc(db, 'pesquisas', pesquisaId));
        navigation.navigate('DrawerNavigator', { screen: 'Pesquisas' });
      } catch (error) {
        console.error('Erro ao apagar pesquisa:', error);
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
        <TouchableOpacity style={styles.button} onPress={handleEditar}>
          <Text style={styles.buttonText}>SALVAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <View style={{ alignItems: 'center' }}>
            <Icon name="delete" size={40} color="#FFFFFF" />
            <Text style={styles.deleteText}>Apagar</Text>
        </View>
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
  deleteButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    padding: 12,
    borderRadius: 30,
    zIndex: 10
    },
  deleteText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontFamily: 'AveriaLibre-Regular',
    marginTop: 4,
    }
});


export default ModificarPesquisa;