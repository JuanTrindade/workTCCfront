import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, Alert, Image, SafeAreaView, FlatList, TextInput, View, RefreshControl} from 'react-native';
import api from '../services/api'
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons"

import styles from '../styles';
import Notify from '../components/NotiicationList';
import bell from '../assets/bell.jpg'

export default function notifications({ route }){
    const data =[
        {
            photo: bell,
            description: 'Seja bem vindo(a) ao aplicativo :D',
            id: '1561cdsaa56d4dc'
        },
    ];

    const [isLoading, setisLoading] = useState(false);

    async function Refresh(){
        setisLoading(true);
        setTimeout(() => {
            setisLoading(false);
        }, 1000);
    }
    return(
        <SafeAreaView style={styles.container2}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Notify photo={item.photo} descript={item.description} />}
                keyExtractor={(item) => String(item.id)}
                refreshControl={
                    <RefreshControl 
                        refreshing={isLoading}
                        onRefresh={Refresh}
                    />
                }
            />
        </SafeAreaView>
    );
}