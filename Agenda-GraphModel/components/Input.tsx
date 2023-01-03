import { ScrollView, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'


const Input = ({label, value, keyboardType, handleChange}:{label: string, value: any, keyboardType: any, handleChange: any}) => {
    
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                value={value}
                keyboardType={keyboardType}
                onChangeText={text => handleChange(text)}
                style={styles.input}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 10,
        marginHorizontal: 5,
    },
    label: {
        color: 'gray',
        marginBottom: 5,
    },
    input: {
        borderBottomWidth: 1,
        fontSize: 16,
        padding: 3,
        paddingLeft: 10,
        height: 45, // height
        borderBottomColor: '#F68712',
        backgroundColor: '#f9f9f9' //bgColor
    }
})

export default Input