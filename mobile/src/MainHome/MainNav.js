import React from 'react';
import {View, ImageBackground, Text, TouchableOpacity, Alert, Image} from 'react-native';

import background from '../assets/working.jpg';

import styles from '../styles';

export default function MainNav({ navigation }) {
    
    function login()
    {
        navigation.navigate('Main')
    }

    function cadastro()
    {
        navigation.navigate('Tela')
    }

    return(
        <ImageBackground 
            source={background} 
            style={styles.container}
            blurRadius={5}
        >
            <View style={styles.content}>
                <Image 
                    source={require('../assets/Logo.png')}
                    style={{width: 200, height: 200, marginBottom: 70}}
                >
                </Image>
                <View style={styles.pd2}></View>
                <TouchableOpacity
                    style={styles.buttonlog}
                    onPress={login}
                >
                <Text style={styles.buttonText}>
                    Login
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonlog}
                    onPress={cadastro}
                >
                <Text style={styles.buttonText}>
                    Cadastrar
                </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}