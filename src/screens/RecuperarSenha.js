import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { auth_mod } from '../config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

function RecuperarSenha(){
    const [email, setEmail] = useState('');
    const [txtWarning, setWarning] = useState(false)
    const [successMsg, setSuccessMsg] = useState(false)
    const navigation = useNavigation();

    const handleNewPassword = () => {
      const emailRegex = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      if(emailRegex.test(email)){
        sendPasswordResetEmail(auth_mod, email).then(() => {
          console.log("E-mail de recuperação enviado com sucesso!");
          setWarning(false)
          setSuccessMsg(true)
        }).catch((error) => {
          console.error("Erro ao enviar e-mail de recuperação: ", error);
          setWarning(true)
          setSuccessMsg(false)
        });
      }else{
        setWarning(true)
        setSuccessMsg(false)
      }
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.middleSection}>                
                <Text style={styles.stdText}>E-mail</Text>
                <TextInput style={styles.stdInputBox} value={email} onChangeText={setEmail}/>
                {txtWarning ? (
                  <Text style={styles.warning}>E-mail parece ser inválido</Text>
                ) : successMsg ? (
                  <Text style={styles.success}>E-mail enviado caso ele esteja registrado!</Text>
                ) : (<Text></Text>)}
                <TouchableOpacity style={styles.middleButtonLogin} onPress={handleNewPassword}>
                    <Text style={styles.buttonText}>RECUPERAR</Text>
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
  success: {
    color: '#37BD6D',
    fontFamily: 'AveriaLibre-Regular',
    marginBottom: 10
  },
  sEmail:{
    marginBottom: 10
  },
  middleSection: {
    flex: 1, // Ocupa 50% da tela
    justifyContent: 'flex-start', // Centraliza o conteúdo verticalmente
    width: '65%',
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center'
  },
  middleButtonLogin: {
    alignSelf: 'center',
    backgroundColor: '#37BD6D',
    width: '100%',
    marginTop: 20,
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
  buttonText: {
    color: '#FFFFFF', // Cor do texto
    fontSize: 20, // Tamanho da fonte
    fontFamily: 'AveriaLibre-Regular', // Fonte personalizada
    alignSelf: 'center'
  },
});

export default RecuperarSenha