import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'


const SearchBar = () => {
    return (
        <View style={styles.container}>
            <FontAwesome name='search' size={19} color='#6B0079' style={{ marginTop: 5, marginRight: 5 }} />
            <TextInput 
                placeholder='Type a question here'
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 13,
        paddingVertical: 6,
        display: 'flex',
        flexDirection: 'row',
        color: '#5B5B5B',
    },
    input: {
        fontSize: 16,
    }
})

export default SearchBar