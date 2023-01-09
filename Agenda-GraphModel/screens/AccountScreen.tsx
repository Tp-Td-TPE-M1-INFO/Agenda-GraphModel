import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import axios from '../components/api/axios'

import Input from '../components/Input'
import Button from '../components/ButtonBg'
import { getUserData } from '../components/api/GetUserData'


const AccountScreen = () => {
    
    const [userData, setUserData] = useState({
		username:'',
        name: '',
        surname: '',
        age: '',
        id: ''
	})
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState('')
    const [username, setUsername] = useState('')

    useEffect(()=>{
		getData()

        setName(userData.name)
        setSurname(userData.surname)
        setUsername(userData.username)
        setAge(userData.age)
	})    

	const getData = async () => {
		const user = await getUserData()
		setUserData({
			username: user.username,
            name: user.name,
            surname: user.surname,
            age: user.age,
            id: user._id,
		})
	}

    const updateData = async() => {
        const data = {
            name,
            surname,
            age,
            username,
		}
        
        try{
            const response = await axios.put(`user/update/${userData.id}`, data)
			
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

            <View style={styles.imgBox}>
                <Image source={require('../assets/images/foods.png')} style={styles.image} />
            </View>

            <View style={styles.inputs}>
                <Input label='Name' value={name} keyboardType='default' handleChange={(text: string) => setName(text)} />
                <Input label='Surname' value={surname} keyboardType='default' handleChange={(text: string) => setSurname(text)} />
                <Input label='Age' value={String(age)} keyboardType='phone-pad' handleChange={(text: string) => setAge(text)} />
                <Input label='Username' value={username} keyboardType='default' handleChange={(text: string) => setUsername(text)} />
            </View>
            {/* <View style={{ marginBottom: 25 }}>
                <Button color='violet' onPress={updateData}>Update data</Button>
            </View> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
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
    },
    image: {
        width: 250,
        height: 150,
    },
    imgBox: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 10
    }
})

export default AccountScreen
