import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [txtWarning, setWarning] = useState(false)
    const navigation = useNavigation();

  const handleLogin = () => {

      console.log("Tentou enviar Email")
      const emailRegex = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
    if(emailRegex.test(email)){
      setWarning(false)
      navigation.reset({
        index: 0,
        routes: [{ name: 'DrawerNavigator' }],
      });
    }else{
      setWarning(true)
    }
  }
  const createAccount = () =>{
    navigation.navigate('NovaConta')
  }
  const RecuperarAcc = () =>{
    navigation.navigate('RecuperarSenha')
  }

    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.topText}>Satisfying.you</Text>
                <Icon name="sentiment-satisfied" size={60} color="#FFFFFF" />
            </View>
            <View style={styles.middleSection}>
                <Text style={styles.stdText}>E-mail</Text>
                <TextInput style={[styles.stdInputBox, styles.sEmail]} value={email} onChangeText={setEmail} />
                <Text style={styles.stdText}>Senha</Text>
                <TextInput style={styles.stdInputBox} value={senha} onChangeText={setSenha} secureTextEntry/>
                {txtWarning ? (<Text style={styles.warning}>E-mail e/ou senha Inválidos</Text>) : (<Text></Text>)}
                <TouchableOpacity style={styles.middleButtonLogin} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.bottomButtonAccount}>
                    <Text style={styles.buttonTextBottom} onPress={createAccount}>Criar minha conta</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.bottomButtonPassword}>
                    <Text style={styles.buttonTextBottom} onPress={RecuperarAcc}>Esqueci minha senha</Text>
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
  warning: {
    color: '#FD7979',
    fontFamily: 'AveriaLibre-Regular',
    marginBottom: 10
  },
  sEmail:{
    marginBottom: 10
  },
  topSection: {
    flex: 1, // Ocupa 25% da tela
    flexDirection: 'row',
    justifyContent: 'center', // Alinha o conteúdo ao final verticalmente
    alignSelf: 'center',
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    justifyContent: 'space-between',
    width: '50%',
    backgroundColor: '#2B1D62',
    marginTop: 10
  },
  topText: {
    fontSize: 40,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Bold'
  },
  middleSection: {
    flex: 3, // Ocupa 50% da tela
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    width: '65%',
    alignSelf: 'center',
    marginTop: 15
  },
  middleButtonLogin: {
    alignSelf: 'center',
    backgroundColor: '#37BD6D',
    width: '100%',
    padding: 5, // Espaçamento interno
    alignItems: 'center', // Centraliza o texto horizontalmente
  },
  stdText: {
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20
  },
  stdInputBox: {
    backgroundColor: '#FFFFFF',
  },
  bottomSection: {
    flex: 2, // Ocupa 25% da tela
    justifyContent: 'flex-end', // Alinha o conteúdo ao início verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    width: '65%',
    alignSelf: 'center',
    marginBottom: 15
  },
  title: {
    fontSize: 24, // Tamanho da fonte
    color: '#FFFFFF', // Cor do texto
    fontFamily: 'AveriaLibre-Bold', // Fonte personalizada
  },
  button: {
    backgroundColor: '#37BD6D', // Cor de fundo
    padding: 15, // Espaçamento interno
    alignItems: 'center', // Centraliza o texto horizontalmente
    width: '65%', // Largura do botão
  },
  bottomButtonPassword: {
    backgroundColor: '#B0CCDE',
    padding: 5, // Espaçamento interno
    margin: 5,
    alignItems: 'center', // Centraliza o texto horizontalmente
    width: '100%'
  },
  bottomButtonAccount: {
    backgroundColor: '#419ED7',
    padding: 5, // Espaçamento interno
    margin: 5,
    alignItems: 'center', // Centraliza o texto horizontalmente
    width: '100%', // Largura do botão
  },
  buttonText: {
    color: '#FFFFFF', // Cor do texto
    fontSize: 20, // Tamanho da fonte
    fontFamily: 'AveriaLibre-Regular', // Fonte personalizada
    alignSelf: 'center'
  },
  buttonTextBottom: {
    color: '#FFFFFF', // Cor do texto
    fontSize: 15, // Tamanho da fonte
    fontFamily: 'AveriaLibre-Regular', // Fonte personalizada
    alignSelf: 'center'
  }
});

export default Login