import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AgradecimentoParticipacao = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Coleta');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

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
});

export default AgradecimentoParticipacao;
