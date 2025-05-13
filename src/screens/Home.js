import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Home(){

    return(
        <View style={styles.container}> 
            <View style={styles.topSection}>
                <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
                <TextInput style={styles.stdInputBox} placeholder='Insira o termo de busca...'/>
            </View>
            <View style={styles.midleSection}>
                <Image style={styles.images} source={require('D:/DownloadD/meuapp/assets/placeholder.jpg')}/>
                <Image style={styles.images} source={require('D:/DownloadD/meuapp/assets/placeholder.jpg')}/>
                <Image style={styles.images} source={require('D:/DownloadD/meuapp/assets/placeholder.jpg')}/>
            </View>
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.bottomButtonSearch}>
                    <Text style={styles.buttonText}>NOVA PESQUISA</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    backgroundColor: '#2B1D62', // Cor de fundo
  },
  topSection:{
    flex: 0.1,
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginTop: 10
  },
  stdInputBox:{
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 11,
    alignItems: 'flex-end'
  },
  midleSection:{
    width: '95%',
    flex: 0.7,
    flexDirection: 'row',
    backgroundColor: '#0000000',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  images: {
    height: 150,
    width: 200,
    borderRadius: 10
  },
  bottomSection: {
    width: '95%',
    flex: 0.15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  bottomButtonSearch: {
    backgroundColor: '#37BD6D',
    width: '100%',
    padding: 5, // Espaçamento interno
    alignItems: 'center', // Centraliza o texto horizontalmente
  },
  buttonText: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFFFFF'
  }
});

export default Home