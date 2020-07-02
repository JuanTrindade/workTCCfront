import React, { Component, useState, } from 'react';
import { ImageBackground, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, Alert, View, Image, CheckBox} from 'react-native';
import { Avatar} from 'react-native-elements';
import background from '../assets/working.jpg';
import luba from "../assets/luba.jpg";
import { Feather }  from '@expo/vector-icons';
import api from '../services/api';

import styles from '../styles';

export default function Photo({navigation, route}){
    const nm = route.params.nome; 
    const us = route.params.user;
    const ps = route.params.pass;
    const em = route.params.em;
    const tl = route.params.tel;
    const cdd = route.params.cidade;
    const ff = route.params.UF;
    const tp = route.params.tipo;
    const dc = route.params.desc

    return(
        <ImageBackground 
            source={background}
            style={styles.container}
            blurRadius={5}
        >
            <View style={styles.content}>
                <Image 
                    source={luba} 
                    style={styles.PerfImg}
                    blurRadius={1}
                />

                <Text style={styles.label2}>Cadastre sua foto</Text>
                <TouchableOpacity 
                    style={styles.buttonlog}
                    onPress={() => navigation.navigate("Teste", {
                        nome: nm,
                        username: us,
                        password: ps,
                        email: em,
                        telephone: tl,
                        city: cdd,
                        uf: ff,
                        type: tp,
                        desc: dc
                    })}
                >
                    <Feather 
                        name="camera" 
                        size={23, 23} 
                        color={"#fff"}
                    />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}