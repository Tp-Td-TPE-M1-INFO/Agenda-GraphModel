import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import FoodBox from '../FoodBox'


const RecomandedFoods = () => {

    return (
        <ScrollView style={styles.container} horizontal>
            <FoodBox />
            <FoodBox />
            <FoodBox />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto'
    }
})

export default RecomandedFoods