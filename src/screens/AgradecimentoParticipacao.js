import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const AgradecimentoParticipacao = () => {
  const navigation = useNavigation();

  return (
<View style={styles.container}>
<Text style={styles.title}>Obrigado por participar da pesquisa!</Text>
<Text style={styles.title}>Aguardamos você no próximo ano!</Text>
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

export default AgradecimentoParticipacao;
