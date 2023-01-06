import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import React from 'react'

const FoodBox = ({name, date}: {name: string, date: string}) => {
    return (
        <ImageBackground source={require('../assets/images/images.jpeg')} style={styles.image} imageStyle={{ borderRadius: 15}}>
            <View style={styles.container}>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.text}>{name}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: 120,
        backgroundColor: 'rgba(107, 0, 121, .4)',
        borderRadius: 15
    },
    image: {
        width: Dimensions.get('screen').width/2.2,
        height: 120,
        padding: 0,
        margin: 3
    },
    text: {
        color: '#fff6ff',
        marginTop: 'auto',
        marginLeft: 'auto',
        fontWeight: 'bold'
    },
    date: {
        color: '#fff6ff',
        marginLeft: 'auto',
        fontWeight: '400'
    }
})

export default FoodBox