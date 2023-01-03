import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'


const TitleRow = ({title}: {title: string}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <Pressable>
                <MaterialCommunityIcons name='dots-horizontal' size={25} color='#FD8C04' />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 18,
        color: '#5B5B5B',
        fontWeight: '500'
    }
})

export default TitleRow