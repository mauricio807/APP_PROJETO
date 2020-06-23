import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Calculadora from './pages/Calculadora';
import Navegador from './pages/Navegador';
import Agenda from './pages/Agenda';

const appStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <appStack.Navigator headerMode="none">
                <appStack.Screen name="Home" component={Home}/>
                <appStack.Screen name="Calculadora" component={Calculadora}/>
                <appStack.Screen name="Navegador" component={Navegador}/>
                <appStack.Screen name="Agenda" component={Agenda}/>
            </appStack.Navigator>
        </NavigationContainer>
    );
};


export default Routes;