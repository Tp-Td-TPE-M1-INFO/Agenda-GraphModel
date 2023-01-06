import { SafeAreaView, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from '../api/axios'

import FoodBox from '../FoodBox'


const RecomandedFoods = () => {

    const [recommandedFood, setRecommandedFood] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        const response = await axios.get(`food/recommend/${'63b6c873a6f874ba525c8ba7'}`)
        setRecommandedFood(response.data[0]);
    }
    
    return (
        <ScrollView style={styles.container} horizontal>
            <FlatList
                data={recommandedFood}
                renderItem={({ item }) => <FoodBox date='' name={`${item.name}`} />}
                keyExtractor={item => item._id}
                numColumns={20}
            /> 
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