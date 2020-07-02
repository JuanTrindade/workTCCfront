import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Modal, Image, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { Feather, MaterialCommunityIcons }  from '@expo/vector-icons';
import styles from '../styles';
import api from '../services/api';

export default function Teste({ navigation, route }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camref = useRef(null);
  const [imageUser, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);

  const name = route.params.nome;
  const username = route.params.username;
  const password = route.params.password;
  const email = route.params.email;
  const telephone = route.params.telephone;
  const city = route.params.city;
  const uf = route.params.uf;
  const typeuser = route.params.type;
  const description = route.params.desc



  async function voltar()
  {
    if(typeuser == "Prestador"){
      const photoData = {
        name,
        username,
        password,
        email,
        telephone,
        city,
        uf,
        imageUser,
        typeuser,
        description 
     };
      try{
        await api.post('profileemployee', photoData);
        navigation.navigate('MainNav');
        Alert.alert('Boa!', "Cadastro efetuado com sucesso");
      } catch (error) {
        Alert.alert('Ops!', "Algo deu errado!");
        console.log(error);
      }
    }
    else{
      const photoData = {
        name,
        username,
        password,
        email,
        telephone,
        city,
        uf,
        imageUser,
        typeuser,     
     };
        try {
          await api.post('profile', photoData);
          navigation.navigate('MainNav');
          Alert.alert('Boa!', "Cadastro efetuado com sucesso");
        } catch (error) {
           Alert.alert('Ops!', "Algo deu errado!");
           console.log(error);
        }
      } 
    }
     

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso a câmera :´(</Text>;
  }
  async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      console.log(data);
    }
  };

  async function TakePicture(){
    if (camref) {
      const data = await camref.current.takePictureAsync();
      setOpen(true);
      setCapturedPhoto(data.uri);
      console.log(data);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera 
        style={{ flex: 1 }} 
        type={type}
        ref={camref}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
        <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.front
                  ? Camera.Constants.Type.back
                  : Camera.Constants.Type.front
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, marginRight: 120, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={TakePicture}
          style={{
              flex: 1,
              alignSelf: 'flex-end',
              alignItems: 'center',
          }}
          >
            <Feather name="camera" size={23, 23} color={"#fff"} style={{marginBottom: 10, marginLeft: 100}}/>
          </TouchableOpacity>
          {imageUser && 
          
            <Modal
              animationType="slide"
              transparent={false}
              visible={open}
            >
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20}}>
              
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={voltar}
                style={{margin: 10, right: 10}}  
              >
                <Feather name="check-circle" size={30}/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setOpen(false)}
                style={{margin: 10, left: 10}}  
              >
                <Feather name="refresh-ccw" size={30}/>
              </TouchableOpacity>
            </View>

              <Image style={{width: '100%', height: 300, borderRadius: 20}} source={{uri: imageUser}} />

            </View>
            </Modal>
          }
        </View>
      </Camera>
    </View>
  );
}