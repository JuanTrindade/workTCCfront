import React, {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Image, Modal, SafeAreaView, Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Logo from '../assets/code.jpg'
import * as Animatable from 'react-native-animatable';
import styles from './styles';

export default function TaskList({ data, titulo, cidade, uf, whatsapp }){
    const [open, setOpen] = useState(false);
    const message = "Olá, vim pelo WorkApp e me interessei em seu serviço de " + titulo;

    function adquireService(){
        Linking.openURL(`whatsapp://send?phone=${whatsapp}&text=${message}`)
    }
    return(
        <TouchableOpacity
            onPress={() => setOpen(true)}
        >
            <Animatable.View 
                style={styles.container}
                animation="slideInDown"
                useNativeDriver
                duration={1000}
            >
                <Ionicons style={styles.icon} name="ios-construct" size={30} color='#000'/>
                <View>
                    <Image style={styles.imgsize} source={Logo}></Image>
                    <Text style={styles.title}>{titulo}</Text>
                    <Text style={styles.cityuf}>{cidade}, {uf}</Text>
                </View>
                <Modal
                    animationType="slide"
                    visible={open}
                    transparent={true}
                >
                    <SafeAreaView style={{ 
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: "#dcdde1"
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.titulo}>{titulo}</Text>
                        </View>
                        <ImageBackground
                            source={Logo}
                            style={styles.img}
                            blurRadius={10}
                        >
                            <Image 
                                source={Logo}
                                style={styles.imgin}
                            />
                        </ImageBackground>
                        <View style={styles.btdesc}>
                            <TouchableOpacity style={styles.desc}>
                                <Ionicons name="ios-add-circle-outline" size={30} color='#000'/>
                                <Text 
                                    style={styles.txtdesc}>
                                    {data}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <SafeAreaView style={styles.sfview}>         
                            <View style={styles.flxrow}>
                                <TouchableOpacity 
                                    style={styles.buttonrow}
                                    onPress={adquireService}
                                >
                                    <Text style={styles.ButtonText}>Adquirir serviço</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.buttonrow2}
                                    onPress={() => setOpen(false)}
                                >
                                    <Text style={styles.ButtonText}>Voltar</Text>
                                </TouchableOpacity>
                            </View>
                        </SafeAreaView>
                    </SafeAreaView>
                </Modal>
            </Animatable.View>
        </TouchableOpacity>
    );
}