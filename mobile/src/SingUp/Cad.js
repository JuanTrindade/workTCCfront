import React, { Component, useState, } from 'react';
import { ImageBackground, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, Alert, View, Image, CheckBox} from 'react-native';
import { Avatar} from 'react-native-elements';
import background from '../assets/working.jpg';
import { Feather }  from '@expo/vector-icons';
import api from '../services/api';

import styles from '../styles';

export default function Cadastrar({navigation}) {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telephone, setTelephone] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [description, setDescription] = useState('');
    const typeuser = "Prestador";

    async function Cad()
    {

        if (name == "" && email == "" && password == "" && telephone == "" && city == "" && uf == "" && username == "" && description == "" || name == "" 
            || email == "" || password == "" || telephone == "" || city == "" || uf == "" || username == "" || description == "" ) {
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
                description,
                typeuser
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
                    desc: description,
                    tipo: typeuser
                } );
                console.log(data);

            } catch (error) {
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
                style={styles.content}
                behavior="height"
            >
                <Image 
                    style={{width: 50, height: 50, marginBottom: 15}} 
                    source={require('../assets/tool.png')}
                >
                </Image>

                <Text style={styles.label}>Nome Completo</Text>

                <TextInput 
                    value={name}
                    onChangeText={setName}
                    style={styles.inputc}
                    placeholder="ex: Jhon Doe"
                    placeholderTextColor="#999"
                    autoCompleteType="name"
                >
                </TextInput>

                <View style={styles.contentbt}>
                    <Text style={styles.labelcad2}>Nome de usuário</Text>
                    <Text style={styles.labelcad2}>SENHA</Text>
                </View>

                <View style={styles.contentbt}>
                    <TextInput 
                        placeholderTextColor="#999"
                        value={username}
                        onChangeText={setUsername}
                        style={styles.input}>
                    </TextInput>

                    <TextInput 
                        placeholderTextColor="#999"
                        value={password}
                        onChangeText={setPassword}
                        style={styles.input}
                        secureTextEntry={true}>
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
                    placeholder='Sem pontos'
                    placeholderTextColor="#999"
                    autoCompleteType='tel'
                    keyboardType='phone-pad'
                    value={telephone}
                    onChangeText={setTelephone}
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

                <Text style={styles.label}>Tipo de serviço</Text>
                <TextInput 
                    placeholderTextColor="#999"
                    value={description}
                    onChangeText={setDescription}
                    style={styles.inputc}>
                </TextInput>

                <View style={styles.pd}/>
                
                <View style={styles.contentbt}>
                    <TouchableOpacity 
                        onPress={Cad}
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

