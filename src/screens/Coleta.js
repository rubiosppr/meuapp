import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Coleta = () => {
  const navigation = useNavigation();


  const goToAgradecimento = () => {
    navigation.navigate('AgradecimentoParticipacao');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>O que você achou do Carnaval 2024?</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconWrapper} onPress={goToAgradecimento}>
          <Icon name="sentiment-very-dissatisfied" size={50} color="#FF0000" />
          <Text style={styles.iconText}>Péssimo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper} onPress={goToAgradecimento}>
          <Icon name="sentiment-dissatisfied" size={50} color="#FF4500" />
          <Text style={styles.iconText}>Ruim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper} onPress={goToAgradecimento}>
          <Icon name="sentiment-neutral" size={50} color="#FFD700" />
          <Text style={styles.iconText}>Neutro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper} onPress={goToAgradecimento}>
          <Icon name="sentiment-satisfied" size={50} color="#32CD32" />
          <Text style={styles.iconText}>Bom</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper} onPress={goToAgradecimento}>
          <Icon name="sentiment-very-satisfied" size={50} color="#008000" />
          <Text style={styles.iconText}>Excelente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconWrapper: {
    alignItems: 'center',
    width: '20%',
  },
  iconText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default Coleta;
