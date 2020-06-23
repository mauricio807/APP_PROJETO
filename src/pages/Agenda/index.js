import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import * as SQLite from 'expo-sqlite'
import { RectButton} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Contact = ({ name, phone, id, handleDeleteContact }) => {
    return (
        <View style={styles.list}>
            <Text style={styles.listText}>Nome: {name}</Text>
            <Text style={styles.listText}>Celular: {phone}</Text>
            <TouchableOpacity 
                style={styles.buttonApaga}
                onPress={() => handleDeleteContact(id)}
            >
                <Text style={styles.buttonList}>Apagar</Text>
            </TouchableOpacity>
        </View>
    )
}

const ListaContatos = ({contacts, handleDeleteContact}) => {
    return <FlatList 
        data={contacts}
        renderItem={({item}) => <Contact name={item.name} phone={item.phone} id={item.id} handleDeleteContact={handleDeleteContact} />}
        keyExtractor={item => String(item.id)}
        style={{width: '90%'}}
    />
}



const Agenda = () => {
    const navigation = useNavigation();
    function hundleVoltar(){
        navigation.goBack();
    }
    
    const [contacts, setContacts] = useState([])
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    
    const db = SQLite.openDatabase('contacts.db')

    function save(){
        let newContact = {
            name,
            phone
        }
        db.transaction(tx => {
            tx.executeSql(
                'insert into contacts(name, phone) values (?, ?)',
                [name, phone],
                (_, { insertId }) => {
                    newContact['id'] = insertId
                    setContacts([
                        ...contacts,
                        newContact
                    ])
                    setName('')
                    setPhone('')
                }
            )
        })
    }

    const handleDeleteContact = (id) => {
        db.transaction(tx => {
            tx.executeSql(
                'delete from contacts where id = ?',
                [id],
                (_, { rowsAffected }) => {
                    if (rowsAffected > 0) {
                        setContacts(contacts.filter(contact => contact.id != id))
                    }
                }
            )
        })
    }

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql('create table if not exists contacts (id integer primary key not null, name text not null, phone text not null)')
            tx.executeSql(
                'select * from contacts',
                [],
                (_, { rows: {_array }}) => {
                    setContacts(_array)
                }
            )
        })
    }, [])

    return (
        <>
        <RectButton style={styles.voltar} onPress={hundleVoltar}>
                <Text style={styles.buttonText}>
                    Voltar
                </Text>
        </RectButton>
        <View>
            <Text style={styles.title}>
                Agenda
            </Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ width: '90%'}}>
            <Text style={ styles.campoText}>Informe o nome</Text>
            <TextInput 
                style={ styles.campo }
                onChangeText={text => setName(text)}
                value={name}
            />
            <Text style={ styles.campoText}>Informe o celular</Text>
            <TextInput 
                style={ styles.campo}
                onChangeText={text => setPhone(text)}
                value={phone}
                keyboardType="numeric"
            />
            <TouchableOpacity 
                onPress={save}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
            <Text style={styles.titleList}>
                Lista de Contatos
            </Text>
            <ListaContatos contacts={contacts} handleDeleteContact={handleDeleteContact} />
        </View>
        </>
    )
}

 const styles = StyleSheet.create({
     campo:{
        backgroundColor: '#4169e1',
        height: 50,
        width: '100%',
        fontSize: 30,
        borderColor: '#000000',
        borderRadius: 10,
        textAlign: 'center',
        marginBottom: -5,
     },
     voltar: {
        backgroundColor: '#4169e1',
        height: 50,
        width: '25%',
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent:'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10,
     },
    title: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 40,
        maxWidth: 260,
        marginTop: -10,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',   
    },
    titleList: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 30,
        maxWidth: 260,
        marginTop: 10,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',   
    },
    campoText: {
        fontSize: 16,
        marginBottom: 5,
        marginTop: 5,
    },
    buttonList:{
        color: '#FFFFFF', 
        fontWeight: 'bold'
    },
    button:{
        backgroundColor: '#4169e1',
        height: 50,
        width: '25%',
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent:'center',
        alignItems: 'center',
        marginLeft: 285,
        marginTop: 10,
    },
    buttonApaga: {
        flex: 1, 
        alignSelf: 'flex-end', 
        backgroundColor: '#000000', 
        height: 30, 
        width: 70,
        borderRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonText:{
        color: '#000000',
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list:{
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'flex-start', 
        padding: 10, 
        width: '100%', 
        marginTop: 10, 
        backgroundColor: '#4169e1',
        borderRadius: 10,
    },
    listText:{
        flex: 2, 
        color: '#fff'
    },
 })
export default Agenda;