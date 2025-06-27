import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import { auth_mod } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login(){
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [txtWarning, setWarning] = useState(false)
  const navigation = useNavigation();

  const handleLogin = async () => {
    const emailRegex = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email) || !senha) {
      setWarning(true);
      return;
    }
    signInWithEmailAndPassword(auth_mod, email, senha).then((userCredential) => {
        setWarning(false);
        console.log("Usuário logado com sucesso!", JSON.stringify(userCredential.user.uid));
        navigation.reset({
          index: 0,
          routes: [{ name: 'DrawerNavigator' }],
        });
      }).catch((error) => {
        setWarning(true);
        console.log("Erro ao fazer login: ", JSON.stringify(error));
      });
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
    flex: 1,
    backgroundColor: '#2B1D62',
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '50%',
    backgroundColor: '#2B1D62',
    marginTop: 10
  },
  topText: {
    marginRight: 10,
    fontSize: 28,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Bold'
  },
  middleSection: {
    flex: 3,
    justifyContent: 'center',
    width: '65%',
    alignSelf: 'center',
    marginTop: 15
  },
  middleButtonLogin: {
    alignSelf: 'center',
    backgroundColor: '#37BD6D',
    width: '100%',
    padding: 5,
    alignItems: 'center',
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
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '65%',
    alignSelf: 'center',
    marginBottom: 15
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
    width: '65%',
  },
  bottomButtonPassword: {
    backgroundColor: '#B0CCDE',
    padding: 5,
    margin: 5,
    alignItems: 'center',
    width: '100%'
  },
  bottomButtonAccount: {
    backgroundColor: '#419ED7',
    padding: 5,
    margin: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
    alignSelf: 'center'
  },
  buttonTextBottom: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
    alignSelf: 'center'
  }
});

export default Login