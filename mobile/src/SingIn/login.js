import React, { Component, useState } from 'react';
import {View, ImageBackground, KeyboardAvoidingView, Text, TouchableOpacity, Alert, Image} from 'react-native';
import {Input, Icon, ThemeProvider, SocialIcon } from 'react-native-elements';
import api from '../services/api';

import 'react-native-gesture-handler';

import background from '../assets/working.jpg';

import styles from '../styles';
import tema from '../style2';



export default function Main({ navigation }) {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

function handlePress()
{
  navigation.navigate('MainNav');
}
async function logPress()
{
  if (username == "" && password == "" || username == "" || password == "") {
    Alert.alert("Ops!", "Valide os campos necessários")
  }
  else{
    try
    {
      const response = await api.post('sessions', {username} )
      const RS = response.data.typeuser;
      const photo = response.data.imageUser;
      if(password === response.data.password)
      {
        navigation.navigate('Home', 
        {
          nome: username, 
          tipo: RS, 
          foto: photo
        });
        console.log(response.data.typeuser);
      }
      else{
        Alert.alert('Ops!', 'Conta inexistente :(');
      }
  }
  catch(err){
    try {
      const responseEmployee = await api.post('sessions_employee', {username} )
      const RE = responseEmployee.data.typeuser;
      const foto = responseEmployee.data.imageUser;
      const city = responseEmployee.data.city;
      const UF = responseEmployee.data.uf;
      const telefone = responseEmployee.data.telephone;
      if(password === responseEmployee.data.password)
      {
        navigation.navigate('Home', 
        {
          nome: username, 
          tipo: RE,
          foto: foto,
          cidade: city,
          uf: UF,
          telephone: telefone
        });
        console.log(responseEmployee.data.typeuser);
      }
    } catch (error) {  
      Alert.alert('Ops!', 'Conta inexistente :,(');
    }
  }

}
}
function func()
{
  Alert.alert('funcionalidade em produção');
}

  return (
    
     <ImageBackground 
      source={background} 
      style={styles.container}
      blurRadius={5}
    >
      <KeyboardAvoidingView
        style={styles.content}
        enabled
      >
      <Image
        style={{width: 50, height: 50, marginBottom: 70}} 
        source={require('../assets/tool.png')}
      >

      </Image>

        <ThemeProvider theme={tema}>
        <Input
          nativeID="1" 
          style={styles.input}
          placeholder="Nome de usuario"
          placeholderTextColor="#000"
          behavior="padding"
          selectionColor="#000"
          value ={username}
          onChangeText={setUsername}
          leftIcon={
            <Icon
              name='email'
              size={20}
              color='#121212'
            />
          }
        />
        <View style={styles.pd}>

        </View>
        </ThemeProvider>
        <ThemeProvider theme={tema}>
        <Input 
          secureTextEntry={true}
          placeholder="Senha"
          placeholderTextColor="#000"
          value={password}
          onChangeText={setPassword}
          leftIcon={
            <Icon
              name='security'
              size={20}
              color='#121212'
            />
          }
        />
        </ThemeProvider>
        <View style={styles.contentbt}>
        <TouchableOpacity
          style={styles.button}
          onPress={logPress}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress = {handlePress}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={func}>
          <Text style={styles.TxtEs}>
            Esqueci minha senha
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
    
  );
      }
