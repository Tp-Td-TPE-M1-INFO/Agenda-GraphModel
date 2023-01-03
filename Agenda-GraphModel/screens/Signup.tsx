import { View, Text, ImageBackground, StyleSheet, Dimensions, ScrollView, Image, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import loginBg from '../assets/images/logo.png'
import Input from '../components/Input'
import Button from '../components/ButtonBg'


const Signup = ({navigation}: {navigation: any}) => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const postData = async() => {
        const data = {
            name,
            surname,
            age,
            userName: username,
			password,
		}
        
        try{
            const response = await axios.post('https://agenda-graph-model-backend-1-6t2qu5m3m-tp-info-4077.vercel.app/api/user/register', data)
			
            if(response.status===200 || response.status===201){
                navigation.navigate('Root')
            }																																																																																																																																																																																																																																																																																																		
        
        }catch(error){
			console.log(data)
            alert('Post Failed');
			console.log(error)
        }
    }

    return (
        <ImageBackground source={require('../assets/images/loginBg.png')} style={styles.container}>
            <Text style={styles.title1}>Welcome to this app</Text>
            <Text style={styles.title2}>Create your account and get started</Text>

            <View style={styles.imgContent}>
                <Image source={loginBg} style={styles.image} />
            </View>

            <ScrollView>
                <View style={styles.inputs}>
                    <Input label='Name' value={name} keyboardType='default' handleChange={(text: string) => setName(text)} />
                    <Input label='Surname' value={surname} keyboardType='default' handleChange={(text: string) => setSurname(text)} />
                    <Input label='Age' value={age} keyboardType='phone-pad' handleChange={(text: string) => setAge(text)} />
                    <Input label='Username' value={username} keyboardType='default' handleChange={(text: string) => setUsername(text)} />
                    <Input label='Password' value={password} keyboardType='visible-password' handleChange={(text: string) => setPassword(text)} />
                </View>

                
                <Button color='violet' onPress={postData}>Signup</Button>
                <View style={styles.authText}>
                    <Text>Already have an account ?</Text>
                    <Pressable onPress={() => { navigation.navigate('Login') }}>
                        <Text style={{ color: '#F68712', marginLeft: 6, textDecorationLine: 'underline' }} >Login</Text>
                    </Pressable>
                </View>
            </ScrollView>
                
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 25,
        padding: 10,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    },
    title1: {
        color: '#fff',
        textAlign: 'right',
        fontSize: 30,
        marginTop: 80, 
        marginRight: 10,
    },
    title2: {
        color: '#fff',
        textAlign: 'right',
        marginRight: 10,
    },
    inputs: {
        marginTop: 20,
        marginBottom: 20
    },
    image: {
        width: 100,
        height: 100,
    },
    imgContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 120
    },
    authText: {
        fontSize: 14,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 100
    }
})

export default Signup