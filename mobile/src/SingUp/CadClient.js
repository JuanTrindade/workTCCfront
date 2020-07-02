import React, { Component, useState, } from 'react';
import { ImageBackground, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, Alert, View, Image, CheckBox} from 'react-native';
import { Avatar} from 'react-native-elements';
import background from '../assets/working.jpg';
import { Feather }  from '@expo/vector-icons';
import api from '../services/api';

import styles from '../styles';

export default function CadastrarCliente({navigation}) {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, seTelephone] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const typeuser = "Empregador";

    async function CadCliente()
    {
        if (name == "" && email == "" && password == "" && city == "" && uf == "" || name == "" 
            || email == "" || password == "" || city == "" || uf == "") {
            Alert.alert("Preencha os campos necessários");
        }
        else{
            const data = {
                name,
                username,
                password,
                email,
                telephone,
                city,
                uf,
                typeuser,
            };
            try {
                navigation.navigate('Photo', 
                {
                    nome: name, 
                    user: username,
                    pass: password,
                    em: email,
                    tel: telephone,
                    cidade: city,
                    UF: uf,
                    tipo: typeuser
                } );
                console.log(data);

            } catch (err) {
                Alert.alert("Ops!", "Algum erro ocorreu com o servidor :(");
            }
        }

    }

    function handlePress()
    {
        navigation.navigate('MainNav');
    }

    function cam()
    {
        navigation.navigate('Teste');
    }

    return (
        <ImageBackground 
            source={background} 
            style={styles.container}
            blurRadius={5}
        >
            <KeyboardAvoidingView 
                enabled
                style={styles.content}
                behavior="height"
            >
                <View style={styles.pd} />

                <Image
                    style={{width: 50, height: 50, marginBottom: 15}} 
                    source={require('../assets/tool.png')}>
                </Image>

                <Text style={styles.label}>Nome completo</Text>
                <TextInput 
                    value={name} 
                    onChangeText={setName}
                    style={styles.inputc}
                    placeholderTextColor="#999"
                >
                </TextInput>
                
                <View style={styles.contentbt}>
                    <Text style={styles.label}>Nome de usuario</Text>
                    <Text style={styles.label}>Senha</Text>                
                </View>

                <View style={styles.contentbt}>
                    <TextInput
                        value={username}
                        onChangeText={setUsername}
                        placeholder="ex: Jhon Doe"
                        autoCorrect={false}
                        style={styles.inputfirs}>
                    </TextInput>

                    <TextInput 
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                        style={styles.inputfirs}>
                    </TextInput>
                </View>
                
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.inputc}
                    autoCompleteType="email"
                    >
                </TextInput>

                <Text style={styles.label}>Telefone</Text>
                <TextInput
                    value={telephone}
                    onChangeText={seTelephone}
                    autoCompleteType='tel'
                    keyboardType='phone-pad'
                    autoCorrect={false}
                    style={styles.inputc}>
                </TextInput>

                <View style={styles.contentbt}>
                    <Text style={styles.labelcad}>Cidade</Text>
                    <Text style={styles.labelcad}>Uf</Text>
                </View>

                <View style={styles.contentbt}>
                    <TextInput 
                        placeholderTextColor="#999"
                        value={city}
                        onChangeText={setCity}
                        style={styles.input}>
                    </TextInput>
                    
                    <TextInput 
                        placeholderTextColor="#999"
                        value={uf}
                        onChangeText={setUf}
                        style={styles.input}>
                    </TextInput>
                </View>

                <View style={styles.pd}/>
                
                <View style={styles.contentbt}>
                    <TouchableOpacity 
                        onPress={CadCliente}
                        style={styles.buttonCad}
                    >
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity 
                        style={styles.buttonCad}
                        onPress = {handlePress}
                    >
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

