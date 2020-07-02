import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, Alert, Image, View, ImageBackground} from 'react-native';
import api from '../services/api';
import { Ionicons, FontAwesome5 } from "@expo/vector-icons"
import * as Animatable from 'react-native-animatable';

//sim, dois imports de estilização '-'
import stylesHome from './styles';
import styles from '../styles';

export default function Menu({ navigation, route }){

    const username = route.params.name;
    const city = route.params.cidade;
    const Uf = route.params.uf;
    const telefone = route.params.telephone;
    
    if(route.params.tp == 'Prestador'){
        return(
            <Animatable.View 
                style={styles.containerMenu}
                animation='slideInUp'
            >
                <ImageBackground  
                    style={{ width: '150%', height: 160, bottom: 25 }}
                    source={{ uri: route.params.foto }}
                    blurRadius={5}
                 >
                    <TouchableOpacity
                        onPress={() => console.log(city, Uf, telefone)}
                        style={{ alignItems: 'center', justifyContent: 'center', }}
                    >
                        <Image
                            source={{uri: route.params.foto}}
                            style={stylesHome.PerfImg}
                        />
                    </TouchableOpacity>
                </ImageBackground>
                <Text style={styles.label2}>
                        Bem vindo {username}
                </Text>

                <Image 
                    source={require('../assets/Logo.png')}
                    style={{width: 200, height: 200}} 
                />

                <TouchableOpacity 
                    style={stylesHome.button2}
                    onPress={() => navigation.navigate('CadService', {
                        cidade: city,
                        uuf: Uf,
                        telefonee: telefone
                    })}
                >
                    <Text style={ stylesHome.txtButton }>Cadastrar Serviços</Text>
                    <Ionicons name="ios-add-circle" size={24} color="black" style={ stylesHome.buttonIcon }/>
                </TouchableOpacity>
                <TouchableOpacity style={stylesHome.button2}>
                    <Text style={stylesHome.txtButton}>Configurações</Text>
                    <Ionicons name="ios-construct" size={24} color="black" style={stylesHome.buttonIcon}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={stylesHome.button2}
                    onPress={() => navigation.navigate('MainNav')}
                >
                    <Text style={stylesHome.txtButton}>Sair</Text>
                    <FontAwesome5 name="door-open" size={24} color="black" style={stylesHome.buttonIcon}/>
                </TouchableOpacity>
            </Animatable.View>
        );
    }
    return(
        <Animatable.View 
            style={styles.containerMenu}
            animation='slideInUp'
        >
                <ImageBackground  
                    style={{ width: '150%', height: 160, bottom: 160 }}
                    source={{ uri: route.params.foto }}
                    blurRadius={5}
                 >
                    <TouchableOpacity
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Image
                            source={{uri: route.params.foto}}
                            style={stylesHome.PerfImg}
                        />
                    </TouchableOpacity>
                </ImageBackground>
                <Text style={stylesHome.label}>
                        Bem vindo {username}
                </Text>

                <TouchableOpacity style={stylesHome.button}>
                    <Text style={ stylesHome.txtButton }>Configurações</Text>
                    <Ionicons name="ios-construct" size={24} color="black" style={ stylesHome.buttonIcon }/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={stylesHome.button}
                    onPress={() => navigation.navigate('MainNav')}
                >
                    <Text style={stylesHome.txtButton}>Sair</Text>
                    <FontAwesome5 name="door-open" size={24} color="black" style={stylesHome.buttonIcon}/>
                </TouchableOpacity>

        </Animatable.View>
    );
}