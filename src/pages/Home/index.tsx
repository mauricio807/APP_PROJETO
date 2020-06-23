import React from 'react';
import { View, ImageBackground, Text, Image, StyleSheet } from 'react-native';
import { RectButton} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const Home = () => {

    const navigation = useNavigation();

    function hundleCalculadora() {
        navigation.navigate('Calculadora');
    }
    function hundleNavegador() {
      navigation.navigate('Navegador');
    }
    function hundleAgenda() {
      navigation.navigate('Agenda');
    }
    return (
    <ImageBackground source={require('../../assets/unieuro.png')} style={styles.container} resizeMode="repeat">
        <View style={styles.main}>
            <Text style={styles.title}>Projeto DMOB</Text>
        </View>
        <View style={styles.main }>
            <RectButton style={styles.button} onPress={hundleCalculadora}>
                <Text style={styles.buttonText}>
                    Calculadora
                </Text>
            </RectButton>
            <RectButton style={styles.button} onPress={hundleNavegador}>
                <Text style={styles.buttonText}>
                    Navegador
                </Text>
            </RectButton>
            <RectButton style={styles.button} onPress={hundleAgenda}>
                <Text style={styles.buttonText}>
                    Agenda
                </Text>
            </RectButton>            
        </View>
    </ImageBackground> 
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
      backgroundColor: '#f0f0f5',
        left: 1,
        top: -20,
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
      top: -150,
    },
  
    title: {
      color: '#000000',
      fontWeight: 'bold',
      fontSize: 40,
      maxWidth: 260,
      marginTop: 64,
      left: 30,
      top: 200,

    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#4169e1',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontSize: 16,
    }
  });

export default Home;