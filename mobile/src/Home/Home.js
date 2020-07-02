import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, Alert, FlatList, TextInput, RefreshControl} from 'react-native';
import api from '../services/api';
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons"
import TaskList from '../components/TaskList';
import * as Animatable from 'react-native-animatable';

import styles from '../styles';

export default function Home({ navigation, route }) {

    const nome = route.params.nome;
    const type = route.params.tipo;
    const photo = route.params.foto;
    const city = route.params.cidade;
    const Uf = route.params.uf;
    const telefhone = route.params.telephone;

    const [job, setJob] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    async function home()
    {
        navigation.navigate('Home');
    }

    async function loadjobs(){
        const response = await api.get('category');

        setJob(response.data);
    }

    useEffect(() => {
        loadjobs();
    }, [])

    async function Refresh(){
        setisLoading(true);
        setTimeout(() => {
            setisLoading(false);
            loadjobs();
        }, 1000);
    }


    return(
        <View style={styles.container2}>
            <View 
                style={{
                        height: 40,
                        marginTop: 30,
                        backgroundColor: '#dcdde1', 
                        justifyContent: 'center'
                    }}>
                <Animatable.View
                    style={styles.header}
                    animation='slideInDown'
                    duration={100}
                 >
                    <Ionicons name="ios-search" size={20} />
                    <TextInput 
                        placeholder="Pesquisar"
                        style={styles.textheader}
                    />
                </Animatable.View>
            </View>
                <FlatList
                    showsHorizontalScrollIndicator={true}
                    style={{ marginTop: 10 }}
                    data={job}
                    keyExtractor={ (jb) => String(jb.id) }
                    onEndReachedThreshold={0.2}
                    refreshControl={
                        <RefreshControl 
                            refreshing={isLoading}
                            onRefresh={Refresh}
                        />
                    }
                    renderItem={({ item: jb }) => <TaskList data={jb.description} titulo={jb.title} cidade={jb.city} uf={jb.uf} whatsapp={jb.telephone}/> }
                >
                </FlatList>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('MainNav')}
                    style={styles.buttonhome}>
                        <FontAwesome
                            name="home" 
                            size={23}
                        />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonhome}
                    onPress={() => Alert.alert('Funcionalidade em produção')}
                >
                        <FontAwesome5 
                            name="gripfire"
                            size={23} 
                        />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('notifications', {
                        foto: photo
                    })} 
                    style={styles.buttonhome}>
                        <FontAwesome 
                            name="bell"
                            size={20} 
                        />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Menu', 
                    {
                        name: nome, 
                        tp: type, 
                        foto: photo,
                        cidade: city, 
                        uf: Uf, 
                        telephone: telefhone
                    })}
                    style={styles.buttonhome}>
                        <Ionicons 
                            name="md-menu"
                            size={20} 
                        />
                </TouchableOpacity>
            </View>
            </View>
    );
}