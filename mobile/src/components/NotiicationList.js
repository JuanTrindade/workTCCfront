import React from 'react'
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';

import styles from '../styles';
import stylesHome from '../Home/styles';

export default function Notify({ photo, descript }) {
    return (
      <View style={{ 
        flex: 1,
       }}>
           <TouchableOpacity style={stylesHome.notificationButton}>
               <Image
                source={ photo } 
                style={stylesHome.notificationImage}
               />
               <Text 
                style={{ 
                    alignSelf: 'center' 
                }}
               >{descript}</Text>
           </TouchableOpacity>
      </View>
    );
}