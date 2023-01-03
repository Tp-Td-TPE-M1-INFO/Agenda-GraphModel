import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import axios from 'axios'

import Input from '../components/Input'
import Button from '../components/ButtonBg'


const AccountScreen = () => {
    
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const updateData = async() => {
        const data = {
            name,
            surname,
            age,
            userName: username,
			password,
		}
        
        try{
            const response = await axios.put('', data)
			
            if(response.status===200 || response.status===201){
                navigation.navigate('Root')
            }																																																																																																																																																																																																																																																																																																		
        
        }catch(error){
			console.log(data)
            alert('Update Failed');
			console.log(error)
        }
    }

    return (
        <ScrollView style={styles.container}>

            <Text style={styles.text}>My account</Text>

            <View style={styles.inputs}>
                <Input label='Name' value={name} keyboardType='default' handleChange={(text: string) => setName(text)} />
                <Input label='Surname' value={surname} keyboardType='default' handleChange={(text: string) => setSurname(text)} />
                <Input label='Age' value={age} keyboardType='phone-pad' handleChange={(text: string) => setAge(text)} />
                <Input label='Username' value={username} keyboardType='default' handleChange={(text: string) => setUsername(text)} />
                <Input label='Password' value={password} keyboardType='visible-password' handleChange={(text: string) => setPassword(text)} />
            </View>
            <Button color='violet' onPress={updateData}>Update data</Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    inputs: {
        marginTop: 15,
        marginBottom: 20
    },
    text: {
        fontSize: 25,
        fontWeight: '600',
        color: '#6B0079',
        marginTop: 10
    }
})

export default AccountScreen
