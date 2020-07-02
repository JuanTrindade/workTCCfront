import React, {useState} from 'react';
import {View, ImageBackground, Text, TouchableOpacity, Alert, Image, TextInput, KeyboardAvoidingView} from 'react-native';

import api from '../services/api';
import background from '../assets/working.jpg';

import styles from '../styles';
import stylesCad from './styles';

export default function CadService({ navigation, route }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const telephone = route.params.telefonee;
    const city = route.params.cidade;
    const uf = route.params.uuf;
    

    async function cadservice(){
        if(
            title == "" && description == ""
            || title == "" || description == ""
        ){
            Alert.alert("Ops!", "Preencha os campos necessários");
        }
        else{
            const data = {
                title,
                description,
                telephone,
                city,
                uf
            };

            try {
                await api.post('category', data);
                Alert.alert("Oba!", "Serviço cadastrado com sucesso");
                navigation.navigate('Menu');
            } catch (error) {
                Alert.alert("Ops!", "Houve algum problema no servidor");
                console.log(error);
            }
        }
    }

    return(
        <ImageBackground 
            source={background} 
            style={styles.container}
            blurRadius={5}
        >
            <View 
                style={styles.content} 
                enabled
            >
                <Text style={stylesCad.label}>Cadastre seu serviço</Text>

                <View style={styles.pd} />
                <View style={styles.pd} />

                <Text style={stylesCad.label2}>Titulo do serviço</Text>
                <TextInput 
                    style={styles.inputc}
                    value={title}
                    onChangeText={setTitle}
                    maxLength={30}
                >
                </TextInput>

                <View style={styles.pd} />
                <View style={styles.pd} />
                <View style={styles.pd} />

                <Text style={styles.label}>Descrição do serviço</Text>
                <TextInput 
                    style={{ height: 100, backgroundColor: "#FFF", justifyContent: "flex-start", alignSelf: 'stretch', fontSize: 15, top: 20 }}
                    value={description}
                    onChangeText={setDescription}
                    maxLength={100}
                    multiline={true}
                >
                </TextInput>

                <View style={stylesCad.contentbt}>
                    <TouchableOpacity 
                        style={styles.buttonCad}
                        onPress={cadservice}
                    >
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity 
                        style={styles.buttonCad}
                        onPress={() => navigation.navigate('Menu')}
                    >
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}