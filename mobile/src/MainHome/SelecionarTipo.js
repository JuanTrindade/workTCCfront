import React, { Component, useState } from 'react';
import {View, ImageBackground, Text, TouchableOpacity, Image} from 'react-native';
import background from '../assets/working.jpg';
import { Feather, MaterialCommunityIcons }  from '@expo/vector-icons';

import 'react-native-gesture-handler';
import styles from '../styles';

export default function Tela({ navigation })
{
    
    function prest(){
        navigation.navigate('Cadastrar');
    }

    function client(){
        navigation.navigate('CadastrarCliente');
    }
    return(
        <ImageBackground 
            source={background} 
            style={styles.container}
            blurRadius={5}
        >
        <View style={styles.content}>
            <Image 
                style={{
                        width: 150, 
                        height: 150, 
                        marginBottom: 50
                    }}
                source={require('../assets/Logo.png')}
            />

            <TouchableOpacity
                onPress={prest}
                style={styles.buttonlog}
            >
            <MaterialCommunityIcons 
                name="toolbox" 
                size={19, 19} 
                color={"#fff"} 
                style={styles.icons}
            />
            <Text
            style={styles.buttonText2}>
                Sou prestador de serviços
            </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={client}
                style={styles.buttonlog}
            >
            <Feather 
                name="user" 
                size={19, 19} 
                color={"#fff"} 
                style={styles.icons}
            />
            <Text style={styles.buttonText2}> 
                Sou cliente
            </Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
    ); 
}