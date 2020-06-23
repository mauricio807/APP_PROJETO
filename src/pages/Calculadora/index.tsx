import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { RectButton} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const Calculadora = () =>{

const [primeiro, setPrimeiro] = useState(0);
const [segundo, setSegundo] = useState(0); 
const [result, setResultado] = useState(0);


const navigation = useNavigation();
function hundleVoltar(){
    navigation.goBack();
}
function soma(){
    setResultado(primeiro + segundo );
}
function subtrair() {
    setResultado(primeiro - segundo)
}
function multiplicar() {
    setResultado(primeiro * segundo)

}
function dividir() {
    if(segundo <= primeiro){
        setResultado(primeiro/segundo)
    }else{
        Alert.alert('Dividendo Menor que o divisior!! Informe uma divisão valida');
    }
}

    return(
        <>
        <ImageBackground source={require('../../assets/react.jpeg')} style={styles.img} resizeMode="repeat">
        <View>
            <RectButton style={styles.button} onPress={hundleVoltar}>
                <Text style={styles.buttonText}>
                    Voltar
                </Text>
            </RectButton>
            <Text style={styles.title}>
                Calculadora
            </Text>
            <View style={styles.buttonContainer}>
                <RectButton style={styles.buttonCalc} onPress={subtrair}>
                    <Text style={styles.buttonText}>
                        -
                    </Text>
                </RectButton>
                <RectButton style={styles.buttonCalc} onPress={soma}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </RectButton>
                <RectButton style={styles.buttonCalc} onPress={multiplicar}>
                    <Text style={styles.buttonText}>
                        *
                    </Text>
                </RectButton>
                <RectButton style={styles.buttonCalc} onPress={dividir}>
                    <Text style={styles.buttonText}>
                        /
                    </Text>
                </RectButton>
            </View>
            
            
            <View style={styles.campoContainer}>
                <TextInput style={styles.campo} 
                keyboardType="decimal-pad"
                onChangeText={text => setPrimeiro(Number(text))}
                />
                <TextInput style={styles.campoB} 
                keyboardType="decimal-pad"
                onChangeText={text => setSegundo(Number(text))}
               />                    
            </View>
            <View style={styles.campoContaineresult}>

            <Text style={styles.resultado}>
                {result}
            </Text>

            </View>
            
           
            
        </View>
        </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({

        img: {
        flex: 1,
        backgroundColor:'#f0f0f5',
        left: -4,
        paddingHorizontal: 10,

      },
   
    voltar: {
        marginTop: 30,
        fontSize: 40,
        color: '#FFFFFF',
    },

    button: {
        backgroundColor: '#4169e1',
        height: 30,
        width: 70,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 40,
    },
    resultado:{ 
        backgroundColor:'#4169e1',
        height: 80,
        width: 300,
        borderColor: '#FFF',
        borderRadius: 10,
        textAlign: 'center',
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize:50,
        marginLeft: 50,
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
    },
    title: {
      color: '#000000',
      fontWeight: 'bold',
      fontSize: 40,
      maxWidth: 260,
      marginTop: 10,
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',   
    },
    buttonCalc: {

        backgroundColor: '#4169e1',
        height: 58,
        width: 90,
        flexDirection: 'row',
        borderRadius: 60,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 2,
        marginBottom: 20,
    },
    campo: {
        backgroundColor: '#4169e1',
        height: 80,
        width: 150,
        borderColor: '#FFF',
        borderRadius: 5,
        textAlign: 'center',
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize:50,
        marginLeft: 10,
        marginTop: 10,
    },

    campoB: {
        backgroundColor: '#4169e1',
        height: 80,
        width: 150,
        borderColor: '#FFF',
        borderRadius: 5,
        textAlign: 'center',
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize:50,
        marginLeft: 5,
        marginTop: 10,
    },

    campoContainer:{
        marginTop: -1,
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    campoContaineresult:{
        marginTop: 100,

    },
    item: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#eee',
        height: 120,
        width: 120,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 16,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'space-between',

        textAlign: 'center',
    },
})
export default Calculadora;