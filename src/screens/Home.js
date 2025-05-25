import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

function Home(){
  const navigation = useNavigation();

    return(
        <View style={styles.container}> 
            <View style={styles.topSection}>
                <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
                <TextInput style={styles.stdInputBox} placeholder='Insira o termo de busca...'/>
            </View>
            <View style={styles.midleSection}>
             <TouchableOpacity onPress={() => navigation.navigate('AcoesPesquisa')} >
                <Image style={styles.images} source={require('../../assets/placeholder.jpg')} />
                </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('AcoesPesquisa')} >
                           <Image style={styles.images} source={require('../../assets/placeholder.jpg')} />
                           </TouchableOpacity>

                 <TouchableOpacity onPress={() => navigation.navigate('AcoesPesquisa')} >
                              <Image style={styles.images} source={require('../../assets/placeholder.jpg')} />
                              </TouchableOpacity>

            </View>
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.bottomButtonSearch} onPress={() => navigation.navigate('NovaPesquisa')}>
                    <Text style={styles.buttonText}>NOVA PESQUISA</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B1D62',
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
    padding: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#FFFFFF'
  }
});

export default Home