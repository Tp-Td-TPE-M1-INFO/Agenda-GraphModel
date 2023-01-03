import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import React from 'react'

const FoodBox = () => {
    return (
        <ImageBackground source={require('../assets/images/poulet-Kedjenou.jpg')} style={styles.container} imageStyle={{ borderRadius: 15}}>
            <Text style={styles.text}>FoodBox 1</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: Dimensions.get('screen').width/2.2,
        height: 120,
        margin: 3,
    },
    text: {
        color: '#fff',
        marginTop: 'auto',
        marginLeft: 'auto',
        fontWeight: '500'
    }
})

export default FoodBox