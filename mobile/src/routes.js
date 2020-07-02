import * as React from 'react'; 
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import MainNav from './MainHome/MainNav';
import Main from './SingIn/login';
import Cadastrar from './SingUp/Cad';
import Tela from './MainHome/SelecionarTipo';
import Teste from './SingUp/teste';
import CadastrarCliente from './SingUp/CadClient';
import Home from './Home/Home';
import Menu from './Home/menu';
import Photo from './SingUp/PhotoCad';
import CadService from './SingUp/CadService';
import notifications from './Home/Notification';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="MainNav"
                component={MainNav}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Main"
                component={Main}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Cadastrar"
                component={Cadastrar}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Tela"
                component={Tela}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Teste"
                component={Teste}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="CadastrarCliente"
                component={CadastrarCliente}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="CadService"
                component={CadService}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Photo"
                component={Photo}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Menu"
                component={Menu}
            />
            <Stack.Screen
                name="notifications"
                component={notifications}
                options={{headerTitle: "Notificações"}}
            />
        </Stack.Navigator>
    );
}

// deletar a vida depois do TCC